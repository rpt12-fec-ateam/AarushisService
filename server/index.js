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

app.get('/allReviews', function(req, res) {
  connection.query('SELECT * from reviews', function(error, results) {
    if(error) {
      console.log('error in get/reviews', error);
    } else {
      res.send(results);
    }
  })
})

app.get('/allItems', function(req, res) {
  connection.query('SELECT * from items', function(error, results) {
    if(error) {
      console.log('error in get/items', error);
    } else {
      res.send(results);
    }
  })
})

app.listen(9000, function() {
  console.log('listening on port 9000');
});