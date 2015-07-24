// initialize parameters
var port = process.argv[2];
var staticDir = process.argv[3];

// initialize dependencies
var express = require('express');
var stylus = require('stylus');

// configure server
var app = express();
app.use(stylus.middleware(staticDir));
app.use(express.static(staticDir));

// activate server
app.listen(port);
