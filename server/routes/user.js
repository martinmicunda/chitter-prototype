var User = require('../models/user');

/**
 * HTTP GET /users/:id
 * Find an user by id
 * Param: id of the user to find
 * Returns: the user corresponding to the specified id
*/
exports.findById = function (req, res) {
    var id = req.params.id;
    console.info('Retrieving user: ' + id);
    return User.findById(req.params.id, function (err, user) {
        if (!err) {
            return res.send(user);
        } else {
            return console.error(err);
        }
    });
}


/**
 * HTTP GET /users/:username
 * Find an user by username
 * Param: username of the user to find
 * Returns: the user corresponding to the specified username
 */
exports.findByUsername = function (req, res) {
    var username = req.params.username;
    console.info('Retrieving user: ' + username);
    return User.find({username: req.params.username}, function (err, user) {
        if (!err) {
            return res.send(user);
        } else {
            return console.error(err);
        }
    });
}

/**
 * HTTP GET /users
 * Returns: the list of users
 */
exports.findAll = function(req, res) {
    console.info('Retrieving all users');
    return User.find(function(err, users) {
        if (!err) {
            return res.send(users);
        } else {
            return console.log(err);
        }
    });
};

/**
 * HTTP POST /users
 * Create an user
 * Param: user details to save
 */
exports.addUser = function(req, res) {
    console.log('Adding user: ' + JSON.stringify(req.body));

    var user = new User({
        _id: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user.save(function (err) {
        if (!err) {
            return console.info("User created: " + user);
        } else {
            return console.error(err);
        }
    });
    return res.send(user);
}

/**
 * HTTP PUT /users/:id
 * Update an user
 * Param: user details to update
 */
exports.updateUser = function(req, res) {
    var id = req.params.id;
    console.info('Updating user: ' + id);
    console.log(JSON.stringify(req.body));
    return User.findById(id, function (err, user) {
        user.name = req.body.name;
        // Todo: (martin) use if/switch statement to search what data are updating
        return user.save(function (err) {
            if (!err) {
                console.log('' + user + ' document(s) updated');
            } else {
            console.log(err);
                console.error('Error updating wine: ' + err);
                res.send({'error':'An error has occurred'});
            }
            return res.send(user);
        });
    });
}

/**
 * HTTP DELETE /users/:id
 * Remove an user
 * Param: id the of the user to remove
 */
exports.deleteUser = function(req, res) {
    var id = req.params.id;
    console.log('Deleting user: ' + id);
    return User.findById(req.params.id, function (err, user) {
        return user.remove(function (err) {
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
