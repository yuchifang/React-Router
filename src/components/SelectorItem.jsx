import React from "react";
import styled from "styled-components";
const StyledSpanTitle = styled.span`
  margin-right: 50px;
`;

const StyledButton = styled.button`
  margin: 0 5px;
`;

const Selector = ({ name, onReduce, onAdd, point }) => {
  const LowerWordName = name.toLowerCase();

  const handleOnAdd = () => {
    onAdd(LowerWordName);
  };

  const handleOnReduce = () => {
    onReduce(LowerWordName);
  };

  const handleReduceDisable = () => {
    if (point[LowerWordName] === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddDisable = () => {
    if (point.total === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <dir>
      <StyledSpanTitle>{name}</StyledSpanTitle>
      <StyledButton onClick={handleOnAdd} disabled={handleAddDisable()}>
        +
      </StyledButton>
      <span>{point[LowerWordName]}</span>
      <StyledButton onClick={handleOnReduce} disabled={handleReduceDisable()}>
        -
      </StyledButton>
    </dir>
  );
};
export default Selector;
