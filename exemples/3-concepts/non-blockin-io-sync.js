var fs = require('fs');

console.log('Avant'); // <- 1

console.log(fs.readFileSync('text', {encoding: 'utf8'})); // <- 2

console.log('Après'); // <- 3
