var mongo = require('./connexion-deconnexion');
var User = require('./schema-model');

mongo.connect(function() {
  User.create({
    username: 'Toto',
    password: 'Tutu'
  }, function(err, user) {
    if(err) {
      console.error(err);
    } else {
      console.log(user);
    }
    mongo.disconnect();
  });
});
