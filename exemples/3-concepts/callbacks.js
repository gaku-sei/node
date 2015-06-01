var http = require('http');

var get = function(url, cbOk, cbErr) {
  http.get(url, function(res) {
    res.on('data', function(body) {
      cbOk(JSON.parse(body));
    });
    res.on('error', function(err) {
      if(cbErr) {
        cbErr(err);
      }
    });
  }).on('error', function(err) {
    if(cbErr) {
      cbErr(err);
    }
  });
};

get('http://localhost:3000/api/r/comments/14', function(comment) {
  get('http://localhost:3000/api/r/posts/' + comment.postId, function(post) {
    get('http://localhost:3000/api/r/users/' + post.userId, function(user) {
      console.log(user);
    });
  });
}); 
