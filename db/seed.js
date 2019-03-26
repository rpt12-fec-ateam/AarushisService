const mysql = require('mysql');
const db = require('./index.js');
const connection = db.connection;

const userFirstNames = ['Oliver', 'Harry', 'Jack', 'James', 'Noah', 'Charlie', 'Jacob', 'Alfie', 'Fred', 'Logan', 'Olivia', 'Amelia', 'Emily', 'Ava', 'Lily', 'Mia', 'Angie', 'Ella', 'Connie', 'Britney', 'Christina', 'Justin', 'Beyonce', 'Alice', 'Shirley', 'Harper', 'Willow', 'Rose', 'Matilda', 'Hermione', 'Debbie', 'Sarah', 'Hanna', 'Melissa', 'Ashley', 'Jessica'];
const userLastInitials = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
const headers = ['Meh', 'Blah', 'Just OK', 'Could be Better', 'Favorite So far!', 'Yummy', 'Gross!', 'Delicious', 'Zesty', 'Sweet', 'Sour', 'Spicy', 'Refreshing', 'Healthy', 'Too Healthy', 'Tasty', 'Weird'];
const veggieIpsum = "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato."

const  veggieIpsumArray =  veggieIpsum.split(' ');
const randomReviews = [];

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

for (var i = 0; i < 500; i++) {
  let randomReview = {};
  randomReview.stars = Math.floor(Math.random() * 5);
  randomReview.userFirstName = userFirstNames[Math.floor(Math.random() * userFirstNames.length)];
  randomReview.userLastInitial = userLastInitials[Math.floor(Math.random() * userLastInitials.length)];
  randomReview.header = headers[Math.floor(Math.random() * headers.length)];
  let reviewStart = Math.floor(Math.random() * (veggieIpsumArray.length - 50));
  let reviewLength = Math.floor(Math.random() * 50);
  let reviewEnd = reviewStart + reviewLength;
  let reviewWords = [];
  for (let i = reviewStart; i < reviewEnd; i++) {
    reviewWords.push(veggieIpsumArray[i]);
  }
  randomReview.review =  reviewWords.join(' ');
  let tipsStart = Math.floor(Math.random() * (veggieIpsumArray.length - 100));
  let tipLength = Math.floor(Math.random() * 10);
  let tipsEnd = tipsStart + tipLength;
  let tipWords = [];
  for (let j = tipsStart; j < tipsEnd; j++) {
    tipWords.push(veggieIpsumArray[j]);
  }

  randomReview.tip = tipWords.join(' ');
  randomReview.date = randomDate(new Date(2017, 0, 1), new Date()).toDateString();
  randomReview.item = Math.floor(Math.random() * 100);
  randomReviews.push(randomReview);
}

let itemNames = [];
for (var i = 0; i < 100; i++) {
  let itemName = {};
  itemName.length = Math.floor(Math.random() * 4);
  itemName.start = veggieIpsumArray[Math.floor(Math.random() *  100)];

}


const seed = function(arrayOfReviews) {
  for (var j = 0; j < 100; j++) {
    connection.query()
  }
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


seed(randomReviews);