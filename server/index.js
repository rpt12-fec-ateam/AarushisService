const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const db = require('../db/index.js');
const connection = db.connection;

const app = express();

app.use(express.static('/Users/aarushisharma/Desktop/AarushisService/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/1')

app.listen(9000, function() {
  console.log('listening on port 9000');
});