import React from 'react';
import Overall from './components/overall.jsx';
import Reviews from './components/reviews.jsx';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    }
  }

  render() {
    return (
      <div>
        <Overall />  
        <Reviews />  
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));