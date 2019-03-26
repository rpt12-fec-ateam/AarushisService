
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

connection.connect(error => {
  if (error) {
    console.log(err);
  } else {
    console.log('connected')
  }
});

connection.query('CREATE DATABASE IF NOT EXISTS fec', (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log('created database fec');
  }
});

connection.query('USE fec', (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log('using database fec');
  }
});

// connection.query('CREATE TABLE IF NOT EXISTS items (id int NOT NULL AUTO_INCREMENT PRIMARY KEY', function(error, results) {
//   if (error) {
//     console.log('error in creating items table', error);
//   } else {
//     console.log('items table created')
//   }
// })


connection.query('CREATE TABLE IF NOT EXISTS reviews (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, item_id int NOT NULL, userFirstName VARCHAR(20), userLastInitial VARCHAR(1), stars INT, header VARCHAR(20), review VARCHAR(500), tips VARCHAR(200), date VARCHAR(20))', (error, results) => {
  if (error) {
    console.log('error in creating reviews table', error);
  } else {
    console.log('reviews table created');
  }
}) 



module.exports.connection = connection;




