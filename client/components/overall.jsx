import React from 'react';
import Stars from './stars.jsx';



const Overall = (props) => {

    return (
      <div id="overall">
      <h3 id="title">REVIEWS</h3>
      <table className="overall-table">
      <tr id="overall-row">
        <td className="left">
        <p id="overall-rating">{props.reviews.length !== 0 ? props.reviews.reduce( ([sum, count], {stars}, i) =>
                        ([sum + 1 * stars, count + 1]), [0, 0] )
               .reduce( (sum, count) => 'Overall Rating: ' + Math.round((sum/count)*10)/10) + "/5" : 'No Reviews'}</p>
        <Stars stars={Math.random() * (5 - 1) + 1}/>
        <p id="price">{props.name}, based on {props.reviews.length} reviews, starting at ${props.price} per cup</p>
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
