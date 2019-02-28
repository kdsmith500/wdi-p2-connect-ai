// var User = require('../../models/user');

// module.exports = {
//     index,
//     show,
//     create,
//     remove,
//     update
// };

// function index(req, res) {
//     User.find({}).then(function(users) {
//         res.status(200).json(users);
//     });
// }

// function show(req, res) {
//     User.findById(req.params.id).then(function(user) {
//         res.status(200).json(user);
//     });
// }

// function create(req, res) {
//     User.create(req.body).then(function(user) {
//         res.status(201).json(user);
//     });
// }

// function remove(req, res) {
//     User.findByIdAndRemove(req.params.id).then(function(user) {
//         res.status(200).json(user);
//     });
// }

// function update(req, res) {
//     User.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(user) {
//         res.status(200).json(user);
//     });
// }