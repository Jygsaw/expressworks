// initialize parameters
var port = process.argv[2];
var file = process.argv[3];

// initialize server
var express = require('express');
var app = express();

// configure views
app.set('view engine', 'jade');
app.set('views', file);

// configure routes
app.get('/home', function (req, res) {
  res.render('index', { date: new Date().toDateString() });
});

// activate server
app.listen(port);
