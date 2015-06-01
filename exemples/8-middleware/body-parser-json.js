module.exports = function() {
  return function(req, res, next) {
    var data = '';

    req.on('readable', function() {
      data += this.read();
    });

    req.on('end', function() {
      try {
        req.body = JSON.parse(data);
        next();
      } catch(e) {
        res.status(500).send(e.message);
      }
    });
  };
};
