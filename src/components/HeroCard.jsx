import React, { useState } from "react";
import styled from "styled-components";

const StyledFigure = styled.figure`
  width: 250px;
  background-color: #ccc;
  border-radius: 10px;
  margin: 10px 25px;
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
  background-color: ${(props) => (props.heroid === props.select ? "#0aa" : "#aaa")};
`;

const HeroCard = ({ name, src, heroid, setSelect, select }) => {

  const handleClick = () => {
    setSelect(heroid)
  }
  return (
    <StyledFigure onClick={handleClick}>
      <StyledImg src={src} />
      <StyledTitle uid={heroid} select={select}>{name}</StyledTitle>
    </StyledFigure>
  );
};
export default HeroCard;
