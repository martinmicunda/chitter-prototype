var passport = require('passport');

var filterUser = function(user) {
    if (user) {
        return {
            user : {
                id: user._id.$oid,
                email: user.email,
                name: user.name,
                avatarPath: user.avatarPath
            }
        };
    } else {
        return { user: null };
    }
};

var security = {
    authenticationRequired: function(req, res, next) {
        console.info('authRequired');
        if (req.isAuthenticated()) {
          next();
        } else {
          res.json(401, filterUser(req.user));
        }
    },
    adminRequired: function(req, res, next) {
        console.log('adminRequired');
        if (req.user && req.user.admin ) {
          next();
        } else {
          res.json(401, filterUser(req.user));
        }
        },
        sendCurrentUser: function(req, res, next) {
        res.json(200, filterUser(req.user));
        res.end();
    },
    login: function(req, res, next) {
        function authenticationFailed(err, user, info){
            if (err) { return next(err); }
            if (!user) { return res.json(filterUser(user)); }
            req.logIn(user, function(err) {
                if ( err ) { return next(err); }
                return res.json(filterUser(user));
            });
        }
        return passport.authenticate(MongoStrategy.name, authenticationFailed)(req, res, next);
    },
    logout: function(req, res, next) {
    req.logout();
    res.send(204);
    }
};

module.exports = security;
