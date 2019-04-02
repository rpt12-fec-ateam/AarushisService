import React from 'react';
import Stars from './stars.jsx';


const Overall = (props) => {

    return (
      <div id="overall">
      <h3 id="title">REVIEWS</h3>
      <table className="overall-table">
      <tr id="overall-row">
        <td className="left">
        <p id="overall-rating">Overall Rating: {props.reviews.reduce( ([sum, count], {stars}, i) =>
                        ([sum + i * stars, count + i]), [0, 0] )
               .reduce( (sum, count) => Math.round((sum/count)*10)/10)}/5</p>
        {/* <Stars stars={props.reviews.reduce( ([sum, count], {stars}, i) =>
                        ([sum + i * stars, count + i]), [0, 0] )
               .reduce( (sum, count) => (sum/count))}/> */}
        <Stars stars={3.5 /*need to fix this so it takes the actual computed average like in overall-rating*/}/> 
        <p id="price">{props.items.length}, based on {props.reviews.length} reviews, starting at {props.items.length} per cup</p>
        </td>
        <td className="right">
        <div>We'd love to read your review, add this to a future delivery in order to review it.</div>
        </td>
      </tr>
      </table>
      </div>
    )

}

export default Overall;
