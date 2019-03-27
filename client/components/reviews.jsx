import React from 'react';
import ReactDOM from 'react-dom';

const Reviews = (props) => {

    return (
      <div>
        <tr>
          <td>
            {props.stars}
          </td>
          <td>
          {props.review}
          </td>
        </tr>        
      </div>
    )

}

export default Reviews;
