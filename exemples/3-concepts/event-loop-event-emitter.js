var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('actif', function(data) {
  console.log(data);
});

emitter.emit('actif', 'Émis');
