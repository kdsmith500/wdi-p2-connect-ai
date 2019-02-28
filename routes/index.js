var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

// The root route renders our only view
router.get('/', function(req, res) {
  User.find({}, function(users) {
    res.render('index', {
      users,
      user: req.user,
      name: req.query.name,
      title: 'Login',
      // sortKey
    });
  });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
