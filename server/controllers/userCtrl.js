// TODO: (martin) this is the place where our chitter User RESTFUL API should be

var User = require('../models/user');

exports.list = function(req, res) {
    User.find(function(err, users) {
        if (!err) {
            return res.send(users);
        } else {
            return console.log(err);
        }
    });
}
