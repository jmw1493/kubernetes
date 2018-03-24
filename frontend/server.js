const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const socket = require('socket.io');

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
  // console.log("hello");
  // request.get('http://my-service:3000 ', (err, http, body) => {
  //   console.log(err, http, body);
  //   res.send(body);
  //   // res.sendFile(path.resolve(__dirname, './index.html'))
  // })
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('made socket connection');
  // io.sockets.on('disconnect', function() {
  //   io.sockets.disconnect();
  //   io.sockets.close();
  // });
  setTimeout(() => {
    io.sockets.emit('refresh-page', {
      message: 'I\'m a socket message, yo'
    });
  }, 5000);
});
