var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    avatarPath: String
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);