const db = require('./index.js');
const mysql = require('mysql');


const reviewSchema = new schema({
  user: String,
  itemID: String,
  stars: Number,
  date: Date,
  header: String,
  tips: String,
})

const reviews = mongoose.model('Reviews', reviewSchema);

module.exports = reviews;