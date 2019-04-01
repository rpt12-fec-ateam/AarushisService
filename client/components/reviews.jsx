import React from 'react';
import Stars from './stars.jsx';


const Reviews = (props) => {

    return (
      <div>
        <br></br>
        <tr className="review-row" key={props.id}>
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
            <div className="tips1">
              {props.tips.length === 0 ? "" : `Tips:`}
            </div>  
            <div className="tips2">
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
