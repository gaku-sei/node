var fs = require('fs');

var readFile = function(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFile('text')
  .then(function(data) {
    console.log('text: ' + data);
  })
  .catch(function(err) {
    console.error('text: ' + err.message);
  });

readFile('text-fail').catch(function(err) {
  console.error('text-fail: ' + err.message);
});

Promise.all([
  readFile('text'),
  readFile('text-copy'),
  readFile('text-copy-copy')
])
  .then(function(data) {
    console.log('all: ' + data.join(''));
  })
  .catch(function(err) {
    console.error(err);
  });

Promise.race([
  readFile('text'),
  readFile('text-copy'),
  readFile('text-copy-copy')
])
  .then(function(data) {
    console.log('race: ' + data);
  })
  .catch(function(err) {
    console.error(err);
  });

Promise.resolve(42).then(function(data) {
  console.log('resolve: ' + data);
});

Promise.reject(42).catch(function(err) {
  console.log('reject: ' + err);
});
