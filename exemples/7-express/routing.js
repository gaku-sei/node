var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Bienvenue dans l\'index');
});

app.get('/bienvenue/:nom', function(req, res) {
  res.send('Bienvenue ' + req.params.nom);
});

app.post('/utilisateur', function(req, res) {
  res.send('Vous tentez de créer un utilisateur');
});

app.listen(3000, console.log.bind(console, 'Serveur démarré'));
