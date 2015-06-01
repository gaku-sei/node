var express = require('express');
var app = express();

app.get('/api/r/comments/:id', function(req, res) {
  res.json({
    id: req.params.id,
    postId: ~~(Math.random() * 100),
    userId: ~~(Math.random() * 100),
    content: 'Je suis le commentaire numéro ' + req.params.id
  });
});

app.get('/api/r/posts/:id', function(req, res) {
  res.json({
    id: req.params.id,
    userId: ~~(Math.random() * 100),
    content: 'Je suis l\'article numéro ' + req.params.id
  });
});

app.get('/api/r/users/:id', function(req, res) {
  res.json({
    id: req.params.id,
    name: 'John Doo'
  });
});

app.listen(3000, function() {
  console.log('Serveur démarré');
});
