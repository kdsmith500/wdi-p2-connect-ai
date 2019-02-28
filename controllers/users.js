var User = require('../models/user');
var Thread = require('../models/thread');

module.exports = {
    index,
    show
};

function index(req, res) {
    User.find({}).populate('thread').exec(function(err, users) {
        res.render('users', {
            users,
            threads: users.thread,
            title: 'Users'
            });
        });
}

function show(req, res) {
    console.log(req.params.id);
    User.findById(req.params.id).populate('threads').exec(function(err, user) {
        Thread.find({user: user._id}, function(err, threads) {
            console.log(user, "TTTTTTT", threads);
            res.render('users/show', {
                user,
                threads,
                title: 'User'
            })
        });
    });
}