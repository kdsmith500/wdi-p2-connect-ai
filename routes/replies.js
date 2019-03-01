var express = require('express');
var router = express.Router();
var threadsCtrl = require('../controllers/threads');

router.get('/threads/:id', threadsCtrl.index);
router.post('/threads/:id', threadsCtrl.create);

module.exports = router;