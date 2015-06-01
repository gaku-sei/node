var net = require('net');

var server = net.createServer(function(c) {
  console.log('connexion');

  c.write('bonjour\r\n');

  c.on('readable', function() {
    var data = this.read();
    if(data) {
      if(data.equals(new Buffer('bye\r\n'))) {
        c.write('à bientôt\r\n', function() {
          c.end();
        });
      } else {
        c.write(data);
      }
    }
  });

  c.on('end', function() {
    console.log('déconnexion');
  });
});

server.listen(3000, function() {
  console.log('Serveur démarré');
});
