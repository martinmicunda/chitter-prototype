var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tweetSchema= new Schema({
//    userId: ObjectId, // TODO: (martin) check if this work as mongo can refered to other collection only by ObjectId and not String also check if mongooseJS support some kind of relationship
    creationDate: { type: Date, default: Date.now },
    text: String
}, { collection: 'tweets' });

module.exports = mongoose.model('Tweet', tweetSchema);