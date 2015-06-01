var ejs = require('ejs');

ejs.renderFile('index.ejs', {
  title: 'Titre',
  fruits: ['pomme', 'raisin', 'banane']
}, function(err, html) {
  console.log(html)
});
