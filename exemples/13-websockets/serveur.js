var http = require('http');
var express = require('express');
var socketIo = require('socket.io');

var app = express();

var serveur = http.Server(app);

var io = socketIo(serveur);

app.use(express.static(__dirname));

var réponses = ['Ok', 'D\'accord', 'Passionnant'];

var random = function(x) {
  return ~~(Math.random() * x);
};

io.on('connection', function(socket) {
  io.emit('message', 'Bienvenue');

  socket.on('message', function(message) {
    setTimeout(function() {
      io.emit('message', réponses[random(réponses.length)]);
    }, random(3000));
  });
});

serveur.listen(3000, function() {
  console.log('Serveur démarré');
});
