var mongoose = require('mongoose');

exports.connect = function(callback) {
  mongoose.connect('mongodb://localhost/test', function(err) {
    if(err) {
      console.error(err);
    } else {
      console.log('Connexion réussie');
      callback();
    }
  });
};

exports.disconnect = function() {
  mongoose.disconnect(function() {
    console.log('Déconnecté');
  });
};
