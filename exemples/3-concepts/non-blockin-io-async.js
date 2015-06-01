var fs = require('fs');

console.log('Avant'); // <- 1

fs.readFile('text', {encoding: 'utf8'}, function(err, data) {
  console.log(data);
}); // <- 3

console.log('Après'); // <- 2
