var crypto = require('crypto');

var mongoose = require('mongoose');

var hMac = function(password) {
  return crypto.createHmac('sha512', 'user-password').update(password).digest('hex');
};

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

userSchema.methods.encryptPassword = function() {
  this.password = hMac(this.password);
  return this;
};

userSchema.methods.isValid = function(password) {
  return this.password === hMac(password);
};

module.exports = mongoose.model('user', userSchema);
