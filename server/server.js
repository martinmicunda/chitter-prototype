var http = require('http');
var express = require('express');
var config = require('./config.js');
var mongoose = require('mongoose');
var app = express();
var server = http.createServer(app);

app.configure(function(){
    app.use(express.favicon());
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(app.router);
    // set root application directory (from this directory will load index.html)
    app.use(express.static(config.server.distFolder));
    // A standard error handler - it picks up any left over errors and returns a nicely formatted server 500 error
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.use(express.bodyParser());
});

// Database connection
var MONGOLAB_URI = 'mongodb://' + config.mongo.dbUser + ':' + config.mongo.dbPassword + '@ds029798.mongolab.com:29798/' + config.mongo.dbName
mongoose.connect(MONGOLAB_URI);
mongoose.connection.on('open', function() {console.info('Connected to Chitter MongoDB successfully!')});
mongoose.connection.on('error', function(err) {console.error('Connection error to mongoDB: ' + '"' + MONGOLAB_URI + '" ' + err)});

// Models
var User = require('./models/user');
var Tweet = require('./models/tweet');

// Controllers - set up the RESTful API, handler methods are defined in controllers
var userCtrl = require('./controllers/userCtrl');

app.get('/users', userCtrl.list);  // TODO: (martin) this is just for testing, once the database connection will be done we can try if we getting list of user from mongoDB

// Start up the server on the port specified in the config
server.listen(config.server.listenPort, 'localhost', 511, function() {
  // Once the server is listening we automatically open up a browser
  var open = require('open');
  open('http://localhost:' + config.server.listenPort + '/');
});
console.info('Chitter Server - listening on port: ' + config.server.listenPort);
