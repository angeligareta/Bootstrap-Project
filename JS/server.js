// Import
var express = require('express');
var app = express();

// ruteo
app.get('/', function(req, res) {
  res.sendfile(__dirname +"/" + "../HTML/index.html");
});

app.get('/about', function(req, res) {
  res.sendfile(__dirname + "/" + '/public/about.html');
});

// escuchar
app.listen(9000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);
