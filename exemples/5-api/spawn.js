var spawn = require('child_process').spawn;

var ls = spawn('ls', ['-la', '/']);

//ls.stdout.pipe(process.stdout);

ls.stdout.setEncoding('utf8');

ls.stdout.on('data', function(data) {
  console.log('stdout');
  console.log(data);
});

var ls2 = spawn('ls', ['-la', '/ne/fonctionne/pas']);

//ls.stderr.pipe(process.stderr);

ls2.stderr.setEncoding('utf8');

ls2.stderr.on('data', function(data) {
  console.log('stderr');
  console.log('Une erreur est survenue :(');
});
