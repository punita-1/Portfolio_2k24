import React from "react";
import styled from "styled-components";

const RatingBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 10px; /* Adjusted height */
  width: 200px;
  background-color: #eee;
  border-radius: 5px;
`;

const Rating = styled.div`
  height: 100%;
  background-color: ${props => props.color};
  border-radius: 5px;
  width: ${props => props.percentage}%;
  position: relative; /* Enable positioning */
`;

const Circle = styled.span`
  position: absolute; /* Position the circle relative to the Rating component */
  top: 50%;
  transform: translateY(-50%);
  right: -6px; /* Adjust the position to overlap with the end of the green line */
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color:  #8bc34a;; /* Green color for the circle */
`;

const SkillRating = ({ rating, color }) => {
  return (
    <RatingBar>
      <Rating color={color} percentage={rating}>
      <Circle />
      </Rating>
    </RatingBar>
  );
};

export default SkillRating;
