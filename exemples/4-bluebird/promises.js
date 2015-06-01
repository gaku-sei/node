var get = require('../utils').get;

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
