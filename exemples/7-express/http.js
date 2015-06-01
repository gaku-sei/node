var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  fs.readFile('.' + request.url, function(err, contenu) {
    if(err) {
      if(err.code === 'ENOENT') {
        response.statusCode = 404;
        response.statusMessage = 'Fichier non trouvé';
        response.end();
      } else {
        response.statusCode = 500;
        response.end(JSON.stringify(err));
      }
    } else {
      response.end(contenu);
    }
  });
});


server.listen(3000, function(){
  console.log('Serveur démarré!');
});
