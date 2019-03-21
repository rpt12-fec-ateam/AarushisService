
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
    console.log(results);
  }
});

connection.query('USE reviews', (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
  }
});


connection.query('CREATE TABLE IF NOT EXISTS reviews')



const stars = [1,2,3,4,5];
const userFirstNames = ['Oliver', 'Harry', 'Jack', 'James', 'Noah', 'Charlie', 'Jacob', 'Alfie', 'Fred', 'Logan', 'Olivia', 'Amelia', 'Emily', 'Ava', 'Lily', 'Mia', 'Angie', 'Ella', 'Connie', 'Britney', 'Christina', 'Justin', 'Beyonce', 'Alice', 'Shirley', 'Harper', 'Willow', 'Rose', 'Matilda', 'Hermione', 'Debbie', 'Sarah', 'Hanna', 'Melissa', 'Ashley', 'Jessica'];
const userLastInitials = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const headers = ['Yummy', 'Gross', 'Delicious', 'Zesty', 'Sweet', 'Sour', 'Spicy', 'Refreshing', 'Healthy and Tasty', 'Too Healthy', 'Tasty', 'Weird'];
const dates = [];
const review = [];
const tips = [];

const randomReview = {};

