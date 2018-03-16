const express = require('express');
const app = express();
const path = require('path');
const request = require('request');

app.get('/', (req, res, next) => {
  res.send('hello!');
  // res.sendFile(path.resolve(__dirname, './index.html'))
  // console.log("hello");
  // request.get('http://10.107.113.141:3000', (err, http, body) => {
  //   console.log(err, http, body);
  //   res.sendFile(path.resolve(__dirname, './index.html'))
  // })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
})
