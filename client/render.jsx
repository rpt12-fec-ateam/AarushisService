import React from 'react';
import Overall from './components/overall.jsx';
import Reviews from './components/reviews.jsx';



class ComponentReviews extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      items: [],
      average: 0,
    }
    this.getReviews = this.getReviews.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
    this.getReviews();
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
        {this.state.items.map(item => <Overall name={item.name} price ={item.price} reviews={this.state.reviews} average={this.state.average}/>)}
        {this.state.reviews.map(review => <Reviews header={review.header} date={review.date} userFirstName={review.userFirstName} userLastInitial={review.userLastInitial} review={review.review} stars={review.stars} tips={review.tips}/>)}
      </div>
    )
  }

}

export default ComponentReviews;
window.ComponentReviews = ComponentReviews;