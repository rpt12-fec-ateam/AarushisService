import React from 'react';
import Overall from './components/overall.jsx';
import Reviews from './components/reviews.jsx';
import ReactDOM from 'react-dom';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      items: {},
    }
    this.getReviews = this.getReviews.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getItems();
    console.log(this.state);
  }

  getReviews() {
    let id = window.location.pathname;
    (id === '/') ? id = '/item/1' : id;
    fetch(`/allReviews${id}`)
    .then(data => data.json())
    .then(reviews => this.setState({reviews: reviews}))
  }

  getItems() {
    let id = window.location.pathname;
    (id === '/') ? id = '/item/1' : id;
    fetch(`/allItems${id}`)
    .then(data => data.json())
    .then(items => this.setState({items: items}))
  }





  render() {
    return (
      <div>
        <Overall name={this.state.items.name} price={this.state.items.price} reviews={this.state.reviews}/>
        {this.state.reviews.map(review => <Reviews header={review.header} date={review.date} userFirstName={review.userFirstName} userLastInitial={review.userLastInitial} review={review.review} stars={review.stars} tips={review.tips}/>)}
      </div>
    )
  }

}

export default App;