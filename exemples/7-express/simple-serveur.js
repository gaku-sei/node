var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname));

require('./routing')(app);

app.listen(3000, function() {
  console.log('Serveur démarré!');
});
