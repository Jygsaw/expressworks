// initialize parameters
var port = process.argv[2];
var file = process.argv[3];

// initialize varibles
var express = require('express');
var fs = require('fs');

// configure server
var app = express();
app.get('/books', function (req, res) {
  fs.readFile(file, function (err, data) {
    var parsed;
    if (err) res.sendStatus(500);
    try {
      parsed = JSON.parse(data);
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(parsed);
  });
});

// activate server
app.listen(port);
