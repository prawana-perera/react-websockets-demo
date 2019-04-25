const io = require('socket.io-client')
const socket = io.connect('http://localhost:3000')

socket.on('connect', (event) => {
  console.log('connected to server', event);
});

socket.on('welcome', (event) => {
  console.log('welcome event', event);
})