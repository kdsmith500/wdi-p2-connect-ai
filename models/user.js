var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/en/e/e5/FinnAdventureTime.png"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    thread: [{
        type: Schema.Types.ObjectId,
        ref: 'Thread'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);