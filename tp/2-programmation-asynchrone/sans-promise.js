var fs = require('fs');

fs.readFile('text', 'utf-8', function(err, contenu) {
  var mots = contenu.replace(/(\s+|\t|\n|\r|\r\n)/g, ' ').trim().split(' ').filter(function(mot) {
    return mot.length > 5
  }).join('\r\n');

  console.log(mots);
});
