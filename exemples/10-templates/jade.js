var jade = require('jade');

var template = jade.compileFile('index.jade', {
  pretty: true
});

var html = template({
  title: 'Titre',
  fruits: ['pomme', 'raisin', 'banane']
});

console.log(html);
