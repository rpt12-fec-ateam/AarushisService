import React from 'react';
import ReactDOM from 'react-dom';

const Reviews = (props) => {

    return (
      <div>
        <br></br>
        <tr className="review-row">
          <td className="left-review">
          <div className="stars">
            {props.stars}
          </div>
          <div className="header">
            {props.header}
          </div>
          <br></br>
          <div className="date">
            {props.date}
          </div>
          </td>
          <td className="right-review">
            <div>
              {props.review}
            </div>
            <br></br>
            <div>
              {props.tips.length === 0 ? "" : `Tips: ${props.tips}`}
            </div>  
            <br></br>
            <br></br>
            <div className="username">
              {props.userFirstName} {props.userLastInitial}
            </div>  
            <br></br>
          </td>
        </tr>        
      </div>
    )

}

export default Reviews;
