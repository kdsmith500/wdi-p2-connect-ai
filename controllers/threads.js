var Thread = require('../models/thread');
var User = require('../models/user');

module.exports = {
    index,
    show,
    new: newThread,
    create,
    remove,
    edit,
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

function remove(req, res) {
    Thread.findOneAndRemove({'_id':req.params.id}, function(err, thread) {
        res.redirect('/threads');
    });
}

function edit(req, res) {
    Thread.findById(req.params.id, function(err, thread) {
        res.render(`threads/edit`, {
            thread,
            title: 'Edit Thread'
        });
    });
}

function update(req, res) {
    Thread.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, thread) {
        if (err) return res.redirect('threads/edit');
        res.redirect(`/threads/${thread._id}`);
    });
}