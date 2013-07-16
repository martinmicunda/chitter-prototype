var http = require('http');
var express = require('express');
var config = require('./config.js');
var mongoose = require('mongoose');
var passport = require('passport');
var app = express();
var server = http.createServer(app);

app.configure(function(){
    app.use(express.favicon());
    app.use(express.logger());
    app.use(express.bodyParser()); // used to parse JSON object given in the request body
    app.use(passport.initialize()); // Initialize PassportJS
    app.use(app.router);
    // set root application directory (from this directory will load index.html)
    app.use(express.static(config.server.distFolder));
    // A standard error handler - it picks up any left over errors and returns a nicely formatted server 500 error
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.use(express.bodyParser());
});

// Database connection
var MONGOLAB_URI = 'mongodb://' + config.mongo.dbUser + ':' + config.mongo.dbPassword + '@ds029798.mongolab.com:29798/' + config.mongo.dbName;
mongoose.connect(MONGOLAB_URI);
mongoose.connection.on('open', function() {console.info('Connected to Chitter MongoDB successfully!')});
mongoose.connection.on('error', function(err) {console.error('ERROR connecting to: ' + '"' + MONGOLAB_URI + '" ' + err)});

//app.use(function(req, res, next) {
//  if ( req.user ) {
//    console.log('Current User:', req.user.firstName, req.user.lastName);
//  } else {
//    console.log('Unauthenticated');
//  }
//  next();
//});

// RESTful API Handlers
var handlers = {
    user: require('./routes/user'),
    tweet: require('./routes/tweet'),
    security: require('./routes/security')
};

// Login/Logout
app.post('/login', handlers.security.login);
//app.post('/logout', security.logout);

// USER RESTful
app.get('/users', handlers.user.findAll);
app.get('/users/:id', handlers.user.findById);
app.get('/userByUsername/:username', handlers.user.findByUsername);
app.post('/users', handlers.user.addUser);
app.delete('/users/:id', handlers.user.deleteUser);
app.put('/users/:id', handlers.user.updateUser);

// TWEET RESTful
app.get('/tweets', handlers.tweet.findAll);
app.get('/tweets/:id', handlers.tweet.findById);
app.get('/tweets/user/:userId', handlers.tweet.findByUserId);
app.post('/tweet', handlers.tweet.addTweet);
app.delete('/tweets/:id', handlers.tweet.deleteTweet);
app.put('/tweets/:id', handlers.tweet.updateTweet);

// Start up the server on the port specified in the config
server.listen(config.server.listenPort, 'localhost', 511, function() {
    // Once the server is listening we automatically open up a browser
    var open = require('open');
    open('http://localhost:' + config.server.listenPort + '/');
});
console.info('Chitter Server - listening on port: ' + config.server.listenPort);
