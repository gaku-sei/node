var fs = require('fs');

fs.readFile('text', {encoding: 'utf8'}, function(err, data) {
  console.log(data);
});

fs.readdir(__dirname, function(err, data) {
  console.log(data); // Tableau contenant tous les fichiers (. et .. exclus)
});
