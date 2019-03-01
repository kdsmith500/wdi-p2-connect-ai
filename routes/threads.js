var express = require('express');
var router = express.Router();
var threadsCtrl = require('../controllers/threads');

router.get('/threads', threadsCtrl.index);
router.get('/threads/new', threadsCtrl.new);
router.get('/threads/:id/edit', threadsCtrl.edit);
router.get('/threads/:id', threadsCtrl.show);
router.post('/threads', isLoggedIn, threadsCtrl.create);
router.delete('/threads/:id', isLoggedIn, threadsCtrl.remove);
router.put('/threads/:id', isLoggedIn, threadsCtrl.update);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
} 

module.exports = router;
