// initialize parameters
var port = process.argv[2];
var indexFile = process.argv[3];

// configure server
var express = require('express');
var app = express();
app.use(express.static(indexFile || path.join(__dirname, 'public')));

// enable server
app.listen(port);
