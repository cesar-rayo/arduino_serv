// npm install express
// node server.js
var express = require('express');
var app = express();
var path = require('path');

app.get('/', serve_home);
app.get('/juego', serve_juego);

function serve_home(req, res){
  res.send("Hello World!!");
}

function serve_juego(req, res){
  res.sendFile(path.join(__dirname + '/public/juego.html'));
}

//Serve static content
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
