var mongo = require('./connexion-deconnexion');
var User = require('./schema-model');

mongo.connect(function() {
  User.remove({
    username: 'Toto'
  }, function(err, res) {
    if(err) {
      console.error(err);
    } else {
      console.log(res);
    }
    mongo.disconnect();
  });
});
