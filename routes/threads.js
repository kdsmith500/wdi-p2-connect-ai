var express = require('express');
var router = express.Router();
var threadsCtrl = require('../controllers/threads');

router.get('/threads', threadsCtrl.index);
router.get('/threads/new', threadsCtrl.new);
router.get('/threads/:id', threadsCtrl.show);
router.post('/threads', threadsCtrl.create);
router.delete('/threads/:id', threadsCtrl.remove);
router.put('/threads/:id', threadsCtrl.update);

module.exports = router;
