const mysql = require('mysql');
const db = require('./index.js');
const connection = db.connection;
const reviews = db.randomReviews;


const seed = function(arrayOfReviews) {
  for (var i = 0; i < arrayOfReviews.length; i++) {
    connection.query(`INSERT INTO reviews (item_id, userFirstName, userLastInitial, stars, header, review, tips, date) VALUES (${arrayOfReviews[i].item}, "${arrayOfReviews[i].userFirstName}", "${arrayOfReviews[i].userLastInitial}", ${arrayOfReviews[i].stars}, "${arrayOfReviews[i].header}", "${arrayOfReviews[i].review}", "${arrayOfReviews[i].tip}", "${arrayOfReviews[i].date}" )`, function(error, results) {
      if (error) {
        console.log('error in seeding data', error);
      } else {
      console.log('added seed data');
      }
    }) 
  }
}


seed(reviews);