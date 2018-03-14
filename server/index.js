const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const fs = require('fs');
const readline = require('readline');

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', function (socket) {
  console.log('a user connected');

  let timeout = null;

  socket.on('start', function() {
      console.log("socket => start");
      timeout = setInterval(() => {
          if(quoteList.length <= curIdx) {
              clearTimeout(timeout);
              timeout = null;
              socket.emit('finish');
          } else {
              socket.emit('receive', quoteList[curIdx++]);
          }
      }, 1000);
  });

  socket.on('disconnect', function(){
      clearTimeout(timeout);
  });

});

const rd = readline.createInterface({
  input: fs.createReadStream("input.txt")
});

let quoteList = [];
let curIdx = 0;

rd.on('line', function(line) {
  const data = line.split("\t");
  
  quoteList.push({
     type: data[0],
     price: data[1],
     quantity: data[2] 
  });
});