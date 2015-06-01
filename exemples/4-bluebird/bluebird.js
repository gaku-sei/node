var utils = require('../utils');
var Promise = require('bluebird');
var fs = require('fs');
var timers = require('timers');

Promise.promisifyAll(fs);

var commentPromise = Promise.resolve(utils.get('http://localhost:3000/api/r/comments/42'));
var postPromise = Promise.resolve(utils.get('http://localhost:3000/api/r/posts/42'));

// Props
Promise.props({
  comments: commentPromise,
  posts: postPromise
}).then(function(result) {
  utils.log('Props', result.comments, result.posts);
});


// get/call
commentPromise
  .get('content')  
  .call('slice', 0, 10)
  .then(function(content) {
    utils.log('get/call', content + '...');
  });

// PromiseInspection
utils.log('PromiseInspection:before', commentPromise.isFulfilled());
timers.setTimeout(function() {
  utils.log('PromiseInspection:after', commentPromise.isFulfilled());
}, 500);

// Promisification
fs.readFileAsync('text', {encoding: 'utf8'}).then(function(data) {
  utils.log('Promisification', data);
});

// Coroutine
Promise.coroutine(function*() {
  var comment = yield commentPromise;
  utils.log('Coroutine:before', comment);
})().then(function() {
  utils.log('Coroutine:after');
});
