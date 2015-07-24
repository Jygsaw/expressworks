// initialize parameters
var port = process.argv[2];

// initialize variables
var express = require('express');

// configure server
var app = express();
app.get('/search', function (req, res) {
  res.end(JSON.stringify(req.query));
});

// activate server
app.listen(port);
