// TODO: (martin) this is the place where our chitter Tweet RESTFUL API should be

var Tweet = require('../models/tweet');

exports.list = function(req, res) {
    Tweet.find(function(err, tweets) {
        if (!err) {
            return res.send(tweets);
        } else {
            return console.log(err);
        }
    });
}
