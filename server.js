const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const db = require('./db/index.js');
const connection = db.connection;

const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/item/:id', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/allReviews/item/:id', function(req, res) {
  let urlArray = (req.headers.referer.split('/'));
  let id = urlArray[4];
  connection.query(`SELECT * from reviews WHERE item_id =${id};`, function(error, results) {
    if(error) {
      console.log('error in get/reviews', error);
    } else {
      res.send(results);
    }
  })
})

app.get('/allItems/item/:id', function(req, res) {
  let urlArray = (req.headers.referer.split('/'));
  let id = urlArray[4];
  connection.query(`SELECT * from items WHERE id=${id};`, function(error, results) {
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