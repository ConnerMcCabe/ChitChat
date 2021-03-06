const chatForm = document.getElementById('chat-form');

const socket = io();

socket.on('message', message => {
  console.log(message)
});

//message submit
chatForm.addEventListener('submit', e => {
  e.preventDefault();

  const message = e.target.elements.message.value;

  socket.emit('chatMessage', message);
});