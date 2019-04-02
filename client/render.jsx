import React from 'react';
import Overall from './components/overall.jsx';
import Reviews from './components/reviews.jsx';
import ReactDOM from 'react-dom';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      items: [],
    }
    this.getReviews = this.getReviews.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    console.log('window.location.pathname', window.location.pathname);
    let id = window.location.pathname;
    console.log(id);
    this.getReviews();
    this.getItems();
  }

  getReviews() {
    fetch('/allReviews') //need to send window.location.pathway as url but how does it receive on server side?
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

export default App;