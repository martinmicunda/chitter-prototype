var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//TODO: (martin micunda create default path for avatar)
var userSchema= new Schema({
    _id: String,
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    avatarPath: { type: String, default: '../../assets/images/avatars/default.png' }
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


