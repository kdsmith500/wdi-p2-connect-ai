var User = require('../models/user');
var Thread = require('../models/thread');

module.exports = {
    index,
    show
};

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users', {
            users,
            title: 'Users'
        });
    });
}

function show(req, res) {
    User.findById(req.params.id).populate('thread').exec(function(err, user) {
        res.render('users/show', {
            user,
            title: 'User'
        });
    });
}