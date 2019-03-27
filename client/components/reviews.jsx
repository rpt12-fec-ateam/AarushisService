import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './stars.jsx';
// import StarRatings from './react-star-ratings';

const Reviews = (props) => {

    return (
      <div>
        <br></br>
        <tr className="review-row">
          <td className="left-review">
          <div className="stars">
            <Stars stars={props.stars}/>
          </div>
          <div className="header">
            {props.header}
          </div>
          <br></br>
          <div className="date">
            {props.date.slice(4)}
          </div>
          </td>
          <td className="right-review">
            <div>
              {props.review}
            </div>
            <br></br>
            <div>
              {props.tips.length === 0 ? "" : `Tips:`}
            </div>  
            <div>
            {props.tips.length === 0 ? "" : `${props.tips}`}
            </div>
            <br></br>
            <br></br>
            <div className="username">
              {props.userFirstName} {props.userLastInitial}
            <br></br>
            <br></br>
            </div>  
          </td>
        </tr>        
      </div>
    )

}

export default Reviews;
