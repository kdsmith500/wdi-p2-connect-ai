var Thread = require('../models/thread');
var User = require('../models/user');

module.exports = {
    index,
    show,
    new: newThread,
    create,
    remove,
    update
};

function index(req, res) {
    Thread.find({}, function(err, threads) {
        res.render('threads', {
            threads,
            title: 'Threads'
        });
    });
}

function show(req, res) {
    Thread.findById(req.params.id, function(err, thread) {
        res.render('threads/show', {
            thread,
            title: 'Thread'
        })
    });
}

function newThread(req, res) {
    res.render('threads/new', {
        title: 'Add Thread'
      });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    Thread.create(req.body, function(err, thread) {
        thread.user = req.user._id
        if (err) return res.redirect('threads/new');
        User.findOneAndUpdate(
            {googleId: req.user.googleId},
            {$push: { thread: thread }},
            function(err, user) {
                res.redirect(`threads/${thread._id}`); 
        });
    });
};

function remove(req, res) {
    Thread.findByIdAndRemove(req.params.id, function(err, thread) {
        res.redirect('threads');
    });
}

function update(req, res) {
    Thread.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, thread) {
        if (err) return res.redirect(`${thread._id}`);
        res.redirect(`${thread._id}`);
    });
}