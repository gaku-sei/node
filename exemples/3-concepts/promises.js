var http = require('http');

var get = function(url) {
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

get('http://localhost:3000/api/r/comments/14')
  .then(function(comment) {
    return get('http://localhost:3000/api/r/posts/' + comment.postId);
  })
  .then(function(post) {
    return get('http://localhost:3000/api/r/users/' + post.userId);
  })
  .then(function(user) {
    console.log(user);
  });
