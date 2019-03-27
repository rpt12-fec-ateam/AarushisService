import React from 'react';
import Overall from './components/overall.jsx';
import Reviews from './components/reviews.jsx';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import StarRatings from './react-star-ratings';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      items: [],
    }
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getItems();
  }

  getReviews() {
    fetch('/allReviews')
    .then(data => data.json())
    .then(reviews => this.setState({reviews: reviews}))
  }

  getItems() {
    fetch('/allItems')
    .then(data => data.json())
    .then(items => this.setState({items: items}))
  }



  render() {
    return (
      <div>
        <Overall items={this.state.items} reviews={this.state.reviews}/>  
        {this.state.reviews.map(review => <Reviews header={review.header} date={review.date} userFirstName={review.userFirstName} userLastInitial={review.userLastInitial} review={review.review} stars={review.stars} tips={review.tips}/>)}
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));