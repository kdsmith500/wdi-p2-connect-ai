// var Thread = require('../../models/thread');

// module.exports = {
//     index,
//     show,
//     create,
//     remove,
//     update
// };

// function index(req, res) {
//     Thread.find({}).then(function(threads) {
//         res.status(200).json(threads);
//     });
// }

// function show(req, res) {
//     Thread.findById(req.params.id).then(function(thread) {
//         console.log(req.params.id);
//         res.status(200).json(thread);
//     });
// }

// function create(req, res) {
//     Thread.create(req.body).then(function(thread) {
//         res.status(201).json(thread);
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