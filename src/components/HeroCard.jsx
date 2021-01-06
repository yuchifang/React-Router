import React, { useState } from "react";
import styled from "styled-components";

const StyledFigure = styled.figure`
  width: 250px;
  background-color: #ccc;
  border-radius: 10px;
  margin: 10px 25px;
  cursor: pointer;
  overflow: hidden;
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
  background-color: ${(props) => (props.ename === props.select ? "#0aa" : "#aaa")};
`;

const HeroCard = ({ name, src, ename, setSelect, select }) => {
  const handleClick = () => {
    setSelect(ename)
  }
  return (
    <StyledFigure onClick={handleClick}>
      <StyledImg src={src} />
      <StyledTitle ename={ename} select={select}>{name}</StyledTitle>
    </StyledFigure>
  );
};
export default HeroCard;
