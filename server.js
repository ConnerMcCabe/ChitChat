const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Set static folders
app.use(express.static(path.join(__dirname, 'public')));
//we learned today that for express find your public folder and run you need an index.js to get started,
//landing page is always gonna be the index.js
app.get('/', function (req, res) {
  throw new Error('OOPS') // Express will catch this on its own.
})

//run on client connect
io.on('connection', socket => {
  socket.emit('message', 'Welcome to the party');

  //Broadcast on user connect
  socket.broadcast.emit('message', 'A user has joined the Chat')

  //Broadcast on user disconnect
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the Chat')
  });

  socket.on('chatMessage', (msg) => {
    console.log(msg)
  })
})

const PORT = process.env.PORT || 3000 ;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));