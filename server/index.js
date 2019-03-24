var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

var db = require('../db/index.js');
var connection = db.connection;
var reviews = db.reviews;

var app = express();

app.use(express.static('/Users/aarushisharma/Desktop/AarushisService/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.listen(9000, function() {
  console.log('listening on port 9000');
});