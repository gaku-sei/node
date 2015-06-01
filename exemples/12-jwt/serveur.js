var express = require('express');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

var secret = 'totalement secret!';

var User = {
  users: [],

  add: function(user) {
    this.users.push(user);
  },

  find: function(userToFind) {
    return this.users.find(function(user) {
      return user.username === userToFind.username;
    });
  },

  valid: function(user1, user2) {
    return user1.password === user2.password;
  }
};

app.set('views', '.');
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/signup', function(req, res) {
  res.render('form', {
    action: '/signup',
    buttonLabel: 'Créer mon compte',
  });
});

app.post('/signup', function(req, res) {
  User.add(req.body);
  res.redirect('/signin');
});

app.get('/signin', function(req, res) {
  res.render('form', {
    action: '/signin',
    buttonLabel: 'Se connecter',
  });
});

app.post('/signin', function(req, res, next) {
  const user = User.find(req.body);

  if (!user) {
    return next({ statusCode: 404, message: 'Utilisateur non trouvé' });
  }

  if (!User.valid(user, req.body)) {
    return next({ statusCode: 422, message: 'Mot de passe non valide' });
  }

  jwt.sign(req.body, secret, { expiresIn: '10 minutes' }, function(err, token) {
    if (err) {
      return next({ statusCode: 500, message: err.stack });
    }

    res.cookie('user', token, { httpOnly: true, path: '/' }).redirect('/');
  });
});

app.get('/', function(req, res, next) {
  if (!req.cookies.user) {
    return res.redirect('/signin');
  }

  jwt.verify(req.cookies.user, secret, function(err, decoded) {
    if (err) {
      return next({ statusCode: 500, message: err.stack });
    }

    res.send('Bienvenue ' + decoded.username);
  });
});

app.use(function(err, req, res, next) {
  console.error(err);
  res.status(err.statusCode).send(err.message);
});

app.listen(3000, function() {
  console.log('Serveur démarré');
});
