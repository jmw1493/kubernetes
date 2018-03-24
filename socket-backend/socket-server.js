const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log('listening at port 4000');
});

// app.use(express.static('public'));

const io = socket(server);

// io.on('connection', (socket) => {
//   console.log('made socket connection');
//   console.log('this is the socket:  ' + socket.id);

//   socket.on('chat', (data) => {
//     //below refers to all browsers connected to the server via a socket
//     io.sockets.emit('chat', data);
//   });
// });



// 'http://192.168.64.12:30026'
io.on('connection', (socket) => {
  console.log('connected to socket');
  setInterval(() => {
    socket.emit('refresh-page', {
      message: 'I\'m a socket message, yo'
    });
  }, 5000);
});
