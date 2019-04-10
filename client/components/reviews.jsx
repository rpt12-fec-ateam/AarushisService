import React from 'react';
import Stars from './stars.jsx';
import styled from 'styled-components';

const Date = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Notable');
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  font-weight: lighter;
`;

const Header = styled.div`
  font-weight: bold;
`;

const Username = styled.div`
  font-weight: bold;
`;

const Tips = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Notable');
  font-family: 'Space Mono', monospace;
  font-weight: lighter;
`;



const Reviews = (props) => {

    return (
      <div>
        <br></br>
        <tr className="review-row" key={props.id}>
          <td className="left-review">
          <div className="stars">
            <Stars stars={props.stars}/>
          </div>
          <Header>
          <div className="header">
            {props.header}
          </div>
          </Header>
          <br></br>
          <Date>
          <div className="date">
            {props.date.slice(4)}
          </div>
          </Date>
          </td>
          <td className="right-review">
            <div>
              {props.review}
            </div>
            <br></br>
            <Tips>
            <div className="tips1">
              {props.tips.length === 0 ? "" : `Tips:`}
            </div>  
            </Tips>
            <div className="tips2">
            {props.tips.length === 0 ? "" : `${props.tips}`}
            </div>
            <br></br>
            <br></br>
            <Username>
            <div className="username">
              {props.userFirstName} {props.userLastInitial}
            <br></br>
            <br></br>
            </div>  
            </Username>
          </td>
        </tr>        
      </div>
    )

}

export default Reviews;
