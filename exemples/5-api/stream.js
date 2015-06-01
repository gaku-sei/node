var Readable = require('stream').Readable;

var stream = Readable();

var c = 97;
stream._read = function(size) {
  this.push(String.fromCharCode(c++));
  if(c > 'z'.charCodeAt(0)) this.push(null);
};

console.log('Avant'); // <- 1
stream.pipe(process.stdout); // <- 3
console.log('Après'); // <- 2
