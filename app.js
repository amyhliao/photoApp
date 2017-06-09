var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.

app.get('/', function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/login', function(req, res) {
  // res.sendFile('/login.html');
  res.send('This is the login page!');
});

app.get('/logout', function(req, res) {
  // res.sendFile('/logout.html');
  res.send('This is the logout page!');
});

app.get('/albums', function(req, res) {
  // res.sendFile('/albums.html');
  res.send('This is the albums page!');
});

app.get('/albums/new', function(req, res) {
  // res.sendFile('/new_albums.html');
  res.send('This is the create a new albums page!');
});

app.get('/albums/:id', function(req, res) {
  // res.sendFile('/album_id.html');
  res.send('This is a specific albums page!');
});

app.get('/photos', function(req, res) {
  // res.sendFile('/photos.html');
  res.send('This is the photos page!');
});

app.get('/photos/new', function(req, res) {
  // res.sendFile('/new_photos.html');
  res.send('This is the create a new photos page!');
});
app.get('/photos/:id', function(req, res) {
  // res.sendFile('/photo_id.html');
  res.send('This is a specific photos path!');
});

app.listen(3000);

console.log("Running at Port 3000");
