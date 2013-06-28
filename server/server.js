var http = require('http');
var express = require('express');
var config = require('./config.js');
var mongoose = require('mongoose');
var app = express();
var server = http.createServer(app);

// Database TODO: (martin) I still didn't get the database connection running
mongoose.connect(config.mongo.dbUrl, config.mongo.apiKey);
mongoose.connection.on('open', function() {console.log('Connected to MongoDB successfully!');});
mongoose.connection.on('error', function(err) {console.error.bind(console, 'connection error:')});

// Models
var User = require('./models/user');
var Tweet = require('./models/tweet');

// set root application directory (from this directory will load index.html)
app.use(express.static(config.server.distFolder));
// A standard error handler - it picks up any left over errors and returns a nicely formatted server 500 error
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
app.use(express.bodyParser());

// set up the RESTful API, handler methods are defined in api.js
var userCtrl = require('./controllers/userCtrl');
app.get('/users', userCtrl.list);  // TODO: (martin) this is just for testing, once the database connection will be done we can try if we getting list of user from mongoDB

// Start up the server on the port specified in the config
server.listen(config.server.listenPort, 'localhost', 511, function() {
  // Once the server is listening we automatically open up a browser
  var open = require('open');
  open('http://localhost:' + config.server.listenPort + '/');
});
console.log('Chitter Server - listening on port: ' + config.server.listenPort);
