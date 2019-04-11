import React from 'react';
import Stars from './stars.jsx';
import styled from 'styled-components';

const Bolded = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const BoldedTitle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Heebo:800');
  font-family: 'Heebo', sans-serif;
  font-size: 18px;
  text-align: center;
  border-top: 1px solid gray;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Description = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Notable');
  font-family: 'Space Mono', monospace;
  font-size: 12px;
`;

const OverallRow = styled.div` 
  border-bottom: 1px solid gray;
`;

const Left = styled.td`
  width: 300px;
`;

const Right = styled.td`
  width: 500px;
`;


const Overall = (props) => {

    return (
      <div id="overall">
      <BoldedTitle>
      <h3 id="title">REVIEWS</h3>
      </BoldedTitle>
      <OverallRow>
      <tr id="overall-row">
      <Left>
        <td className="left">
        <Bolded>
        <p id="overall-rating">{props.reviews.length !== 0 ? props.reviews.reduce( ([sum, count], {stars}, i) =>
                        ([sum + 1 * stars, count + 1]), [0, 0] )
               .reduce( (sum, count) => 'Overall Rating: ' + Math.round((sum/count)*10)/10) + "/5" : 'No Reviews'}</p>
        </Bolded>
        <Stars stars={props.reviews.length !== 0 ? props.reviews.reduce( ([sum, count], {stars}, i) =>
                        ([sum + 1 * stars, count + 1]), [0, 0] )
               .reduce( (sum, count) => Math.round((sum/count)*10)/10) : 0}/>
        <Description>
        <p id="price">{props.name}, based on {props.reviews.length} reviews, starting at ${props.price} per cup</p>
        </Description>
        <br></br>
        </td>
        </Left>
        <Right>
        <td className="right">
        <div>We'd love to read your review, add this to a future delivery in order to review it.</div>
        </td>
        </Right>
      </tr>
      </OverallRow>
      </div>
    )

}

export default Overall;
