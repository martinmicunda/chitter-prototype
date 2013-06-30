var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    avatarPath: String
}, { collection: 'users' });

// Password verification
userSchema.methods.comparePassword = function(candidatePassword) {

    console.info("candidatePassword: " + candidatePassword);
    console.info("userSchema.password: " + this.password);
    if(candidatePassword === this.password)
        return true;
    else
        return false;
//    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//        if(err) return cb(err);
//        cb(null, isMatch);
//    });
};

module.exports = mongoose.model('User', userSchema);