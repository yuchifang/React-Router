import React, { useState } from "react";
import SelectorItem from "../../components/SelectorItem";
import styled from "styled-components";
import { Button } from 'react-bootstrap';


const StyledFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin:15px;
`

const defaultTalent = {
  str: 0,
  int: 0,
  agi: 0,
  luk: 0,
  total: 10
};

const TalentItemBlock = ({ ename }) => {

  const getLocalStorageValue = () => {
    var defaultValue = JSON.parse(localStorage.getItem(ename));
    if (!!defaultValue) {
      return defaultValue;
    } else {
      return defaultTalent;
    }
  };

  const [point, setPoint] = useState(getLocalStorageValue);

  const handleSubmitBtnDisable = () => {
    if (point.total === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    localStorage.setItem(ename, JSON.stringify(point));
  };

  const handleAdd = (selectTitle) => {
    setPoint((preState) => {
      return {
        ...preState,
        [selectTitle]: point[selectTitle] + 1,
        total: point.total - 1
      };
    });
  };

  const handleReduce = (selectTitle) => {
    setPoint((preState) => ({
      ...preState,
      [selectTitle]: point[selectTitle] - 1,
      total: point.total + 1
    }));
  };



  return (
    <StyledFlex>
      <div>
        <SelectorItem
          point={point}
          onReduce={handleReduce}
          onAdd={handleAdd}
          name="STR"
        />
        <SelectorItem
          point={point}
          onReduce={handleReduce}
          onAdd={handleAdd}
          name="INT"
        />
        <SelectorItem
          point={point}
          onReduce={handleReduce}
          onAdd={handleAdd}
          name="AGI"
        />
        <SelectorItem
          point={point}
          onReduce={handleReduce}
          onAdd={handleAdd}
          name="LUK"
        />
      </div>
      <div>
        <StyledSpan>剩餘點數:{point.total}</StyledSpan>
        <Button variant="secondary" onClick={handleSubmit} disabled={handleSubmitBtnDisable()}>
          Submit
        </Button>
      </div>
    </StyledFlex>
  );
};
export default TalentItemBlock;
