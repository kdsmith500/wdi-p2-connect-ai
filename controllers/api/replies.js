// var Thread = require('../../models/thread');

// module.exports = {
//     index,
//     show,
//     create,
//     remove,
//     update
// };

// function index(req, res) {
//     Thread.findById(req.params.id, function(err, thread) {
//         res.status(200).json(thread.reply);
//     });
// }

// function show(req, res) {
//     reply = req.param.reply;
//     console.log(req.params.id);
//     console.log(req.params.reply);
//     Thread.findById(req.params.id, function(err, thread) {
//             res.status(200).json(thread.reply);
//         });
//     // });
// }

// function create(req, res) {
//     Thread.findById(req.params.id, function(err, thread) {
//         thread.reply.push(req.body);
//         thread.save(); 
//     res.status(201).json(req.body);
//     });
// }

// function remove(req, res) {
//     Thread.findByIdAndRemove(req.params.id).then(function(thread) {
//         res.status(200).json(thread);
//     });
// }

// function update(req, res) {
//     Thread.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(thread) {
//         res.status(200).json(thread);
//     });
// }