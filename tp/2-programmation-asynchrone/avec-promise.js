var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

fs.readFileAsync('text', 'utf-8').then(function(contenu) {
  var mots = contenu.replace(/(\s+|\t|\n|\r|\r\n)/g, ' ').trim().split(' ').filter(function(mot) {
    return mot.length > 5;
  }).join('\r\n');

  console.log(mots);
});
