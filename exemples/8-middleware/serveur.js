var express = require('express');
var bodyParserJson = require('./body-parser-json');

var app = express();

app.use(bodyParserJson());

app.get('/', function(req, res) {
  res.send('Ok ' + req.body.nom);
});

app.listen(3000, function() {
  console.log('Serveur démarré!');
});
