var Tweet = require('../models/tweet');
var User = require('../models/user');

/**
 * HTTP GET /tweets/:id
 * Find a tweet by id
 * Param: id of the tweet to find
 * Returns: the tweet corresponding to the specified id
*/
exports.findById = function (req, res) {
    var id = req.params.id;
    console.info('Retrieving tweet: ' + id);
    return Tweet.findById(req.params.id, function (err, tweet) {
        if (!err) {
            return res.send(tweet);
        } else {
            return console.error(err);
        }
    });
}

/**
 * HTTP GET /tweets/:username
 * Find a tweet by username
 * Param: username of the account the tweet was from
 * Returns: the tweets corresponding to the specified username
 */
exports.findByUserId = function (req, res) {
    console.info('Retrieving tweets for userId: ' + req.params.username);
    Tweet.find(function (err, tweets) {
        if (!err) {
            var returnTweets = [];
            console.log("tweets length: " + tweets.length);
            for(var i = 0; i < tweets.length; i++) {
                console.log("Tweet ID: " + tweets[i].user.username);
                console.log("User ID: " + req.params.username);
                if (tweets[i].user.username == req.params.username) {
                    returnTweets.push(tweets[i]);
                }
            }
            return res.send(returnTweets);
        } else {
            return console.log(err);
        }
    });
};

/**
 * HTTP GET /tweets
 * Returns: the list of tweets
 */
//.sort({date: 'descending'})
exports.findAll = function(req, res) {
    console.info('Retrieving all tweets');
    return Tweet.find({}).populate('user', 'name avatarPath').sort({creationDate: 'descending'}).exec(function(err, tweets) {
        if (!err) {
            console.log('tweets: ' + JSON.stringify(tweets));
            return res.send(tweets);
        } else {
            return console.log(err);
        }
    });
};

/**
 * HTTP POST /tweets
 * Create a tweet
 * Param: tweet details to save
 */
exports.addTweet = function(req, res) {
    console.log('Adding tweet: ' + JSON.stringify(req.body));
    /*
     user: {
     id: ObjectId,
     name: String,
     username: String,
     path: String
     },
     creationDate: { type: Date, default: Date.now },
     text: String
     */

//    User.findOne({ _id: req.body.userId });

    var tweet = new Tweet({
        user: req.body.userId,
        creationDate: new Date(),
        text: req.body.text.text
    });
//    tweet.user.id = req.body.userId;
//    tweet.user.name = req.body.user.name;
//    tweet.user.path = "";
//    tweet.text = req.body.text.text;
    console.log("Adding Tweet: " + JSON.stringify(tweet));
    tweet.save(function (err) {
        if (!err) {
            console.info("Tweet created");
            return res.send("Tweet created");
        } else {
            return res.send(err);
        }
    });
}

/**
 * HTTP PUT /tweets/:id
 * Update a tweet
 * Param: tweet details to update
 */
exports.updateTweet = function(req, res) {
    var id = req.params.id;
    console.info('Updating tweet: ' + id);
    console.log(JSON.stringify(req.body));
    return Tweet.findById(id, function (err, tweet) {
        tweet.name = req.body.name;
        // Todo: (martin) use if/switch statement to search what data are updating
        return tweet.save(function (err) {
            if (!err) {
                console.log('' + tweet + ' document(s) updated');
            } else {
            console.log(err);
                console.error('Error updating wine: ' + err);
                res.send({'error':'An error has occurred'});
            }
            return res.send(tweet);
        });
    });
}

/**
 * HTTP DELETE /tweets/:id
 * Remove a tweet
 * Param: id the of the tweet to remove
 */
exports.deleteTweet = function(req, res) {
    var id = req.params.id;
    console.log('Deleting tweet: ' + id);
    return Tweet.findById(req.params.id, function (err, tweet) {
        return tweet.remove(function (err) {
        if (!err) {
                console.info('' + id + ' document(s) deleted');
                res.send(req.body);
            } else {
                console.error(err);
                res.send({'error':'An error has occurred - ' + err});
            }
        });
    });
}