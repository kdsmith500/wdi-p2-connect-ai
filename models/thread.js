var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var replySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: String
    },
    image: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/en/d/d0/JaketheDog.png"
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});

var threadSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: String
    },
    image: {
        type: String,
        default: "https://cdn.bulbagarden.net/upload/f/f5/399Bidoof.png"
    },
    message: {
        type: String
    },
    reply: [replySchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Thread', threadSchema);