var exec = require('child_process').exec;

exec('ls -la /', function(error, stdout, stderr) {
  console.log('stdout')
  console.log(stdout);
});

exec('ls -la /ne/fonctionne/pas', function(error, stdout, stderr) {
  console.log('stderr')
  console.log(error.code); // error contient {cmd, code, killed, ...}
  console.log('Une erreur est survenue');
});
