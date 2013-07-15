var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var tweetSchema= new Schema({
    user: [{ type: String, ref: 'User', required: true }],
    creationDate: { type: Date, required: true, default: Date.now },
    text: { type: String, required: true }
}, { collection: 'tweets' });

module.exports = mongoose.model('Tweet', tweetSchema);