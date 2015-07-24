// initialize parameters
var port = process.argv[2];

// initialize modules
var express = require('express');
var bodyparser = require('body-parser');

// configure server
var app = express();
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/form', function (req, res) {
  res.end(req.body.str.split('').reverse().join(''));
});

// activate server
app.listen(port);
