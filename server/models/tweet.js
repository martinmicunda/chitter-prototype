var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var tweetSchema= new Schema({
    user: {
        id: ObjectId,
        name: String,
        username: String,
        path: String
    },
    creationDate: { type: Date, default: Date.now },
    text: String
}, { collection: 'tweets' });

module.exports = mongoose.model('Tweet', tweetSchema);