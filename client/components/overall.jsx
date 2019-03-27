import React from 'react';
import Stars from './stars.jsx';
// import Ratings from 'react-ratings-declarative';

const Overall = (props) => {

    return (
      <div id="overall">
      <h3 id="title">REVIEWS</h3>
      <table className="overall-table">
      <tr id="overall-row">
        <td className="left">
        <p id="overall-rating">Overall Rating:</p>
        <Stars />
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
