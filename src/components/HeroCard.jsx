import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledFigure = styled.figure`
  width: 250px;
  background-color: #ccc;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    p{
      background-color: #0aa;
      text-decoration: none;
      outline:none;
      border:none;
    }
  }
`;
const StyledImg = styled.img`
  width: 100%;
`;
const StyledTitle = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  text-decoration: none;  
`;

const HeroCard = ({ name, src }) => {

  return (
    <StyledFigure >
      <StyledImg src={src} />
      <StyledTitle >{name}</StyledTitle>
    </StyledFigure>
  );
};
export default HeroCard;
