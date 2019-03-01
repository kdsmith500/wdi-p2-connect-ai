var Thread = require('../models/thread');
var User = require('../models/user');

module.exports = {
    index,
    create
}

function index(req, res) {
    Thread.find({}, function(err, threads) {
        res.render('threads', {
            threads,
            title: 'Threads'
        });
    });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    Thread.create(req.body, function(err, thread) {
        if (err) return res.redirect('threads/new');
        User.findOneAndUpdate(
            {googleId: thread._id},
            {$push: { thread: thread }},
            function(err, user) {
                res.redirect(`threads/${thread._id}`); 
            }
        );
    });
};