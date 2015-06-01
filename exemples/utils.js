var http = require('http');

exports.get = function(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(res) {
      res.on('data', function(body) {
        resolve(JSON.parse(body));
      });
      res.on('error', function(err) {
        reject(err);
      });
    }).on('error', function(err) {
      reject(err);
    });
  });
};

exports.log = function(header) {
  var args = [].slice.call(arguments).slice(1);
  console.log('-- ' + header + ' --');
  for(i in args) {
    console.log(args[i]);
  }
  console.log('\n');
};
