import React from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap';

const StyledSpanTitle = styled.span`
  margin-right: 50px;
`;


const SelectorItem = ({ name, onReduce, onAdd, point }) => {
  const LowerWordName = name.toLowerCase();

  const handleOnAdd = () => {
    onAdd && onAdd(LowerWordName);
  };

  const handleAddDisable = () => {
    if (point.total === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleOnReduce = () => {
    onReduce && onReduce(LowerWordName);
  };

  const handleReduceDisable = () => {
    if (point[LowerWordName] === 0) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <dir>
      <StyledSpanTitle>{name}</StyledSpanTitle>
      <Button variant="primary" onClick={handleOnAdd} disabled={handleAddDisable()}>
        +
      </Button>
      <span>{point[LowerWordName]}</span>
      <Button variant="primary" onClick={handleOnReduce} disabled={handleReduceDisable()}>
        -
      </Button>
    </dir>
  );
};
export default SelectorItem;
