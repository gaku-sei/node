var mongo = require('./connexion-deconnexion');
var User = require('./schema-model');

mongo.connect(function() {
  User.find({
    username: 'Toto'
  }, function(err, users) {
    if(err) {
      console.error(err);
    } else {
      console.log(users);
    }
    mongo.disconnect();
  });
});
