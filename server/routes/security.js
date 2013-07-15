var passport = require('passport')
  ,LocalStrategy = require('passport-local').Strategy
  ,User = require('../models/user')
  ,Tweet = require('../models/tweet');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({ usernameField: 'email' }, function(username, password, done) {
    console.info("email: " + username);
    console.info("password: " + password);

    User.findOne({ _id: username }, function(err, user) {
        console.info("user: " + user);
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
        if(user.comparePassword(password)) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Invalid password' });
        }
    });
}));

// Simple route middleware to ensure user is authenticated. Otherwise send to login page.
exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
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
    logout: function(req, res, next) {
        req.logout();
        res.send(204);
    }
};

exports.login = function(req, res, next) {
    var tweets;
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) {
            console.info("redirect to login: ");
            return res.json(503, user);
        }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            Tweet.find(function(err, tweetsss) {
                if (!err) {
                    return res.json({user: user, tweets: tweetsss});
                } else {
                    return console.log(err);
                }
            });
        });
    })(req, res, next);
};
