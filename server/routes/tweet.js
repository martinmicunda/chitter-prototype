var Tweet = require('../models/tweet');

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
 * HTTP GET /tweets
 * Returns: the list of tweets
 */
exports.findAll = function(req, res) {
    console.info('Retrieving all tweets');
    return Tweet.find(function(err, tweets) {
        if (!err) {
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

    var user = new Tweet({
        // TODO:(martin) add right details once the model is done
    });

    user.save(function (err) {
        if (!err) {
            return console.info("Tweet created");
        } else {
            return console.error(err);
        }
    });
    return res.send(user);
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
    console.log('Deleting user: ' + id);
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