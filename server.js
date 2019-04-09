const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const url =  require('url');
const querystring = require('querystring');
const path = require('path');

const db = require('./db/index.js');
const connection = db.connection;

const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/item/:id', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/allReviews/item/:id', function(req, res) {
  let id = req.params.id;
  connection.query(`SELECT * from reviews WHERE item_id =${id};`, function(error, results) {
    if(error) {
      console.log('error in get/reviews', error);
    } else {
      res.send(results);
    }
  })
})

app.get('/allItems/item/:id', function(req, res) {
  let id = req.params.id;
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