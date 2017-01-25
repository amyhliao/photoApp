var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/login',function(req,res){
  // res.sendFile('/login.html');
  res.send('This is the login page!');
});

app.get('/logout',function(req,res){
  // res.sendFile('/logout.html');
  res.send('This is the logout page!');
});

app.get('/albums',function(req,res){
  // res.sendFile('/albums.html');
  res.send('This is the albums page!');
});

app.get('/photos',function(req,res){
  // res.sendFile('/photos.html');
  res.send('This is the photos page!');
});

app.listen(3000);

console.log("Running at Port 3000");

// get all the tools we need
// var express  = require('express');
// var app      = express();
// var port     = process.env.PORT || 3000;
// var mongoose = require('mongoose');
// var passport = require('passport');
// var flash    = require('connect-flash');

// var morgan       = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser   = require('body-parser');
// var session      = require('express-session');

// var configDB = require('./config/database.js');

// mongoose.connect(configDB.url); // connect to our database

// // require('./config/passport')(passport); // pass passport for configuration

// // set up our express application
// app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser()); // get information from html forms

// app.set('view engine', 'ejs'); // set up ejs for templating

// // required for passport
// app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session

// require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// app.listen(port);
// console.log('The magic happens on port ' + port);
