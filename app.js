const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 4000;
const hostName = 'localhost';


const server = app.listen(port,hostName,()=>{
    console.log(`listening at ${hostName}:${port}`);
});


app.use(express.static('public'));

var io = socket(server);

io.on('connection',(socket)=>{

  console.log('made socket connection',socket.id);

  //Handle chat event
  socket.on('chat',(data)=>{
    io.sockets.emit('chat',data);
  });

});
