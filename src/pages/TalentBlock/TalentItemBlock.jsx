import React, { useState } from "react";
import SelectorItem from "../../components/SelectorItem";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const defaultTalent = {
  str: 0,
  int: 0,
  agi: 0,
  luk: 0,
  total: 10
};
const TalentItemBlock = ({ ename }) => {
  // const [totalPoint, setTotalPoint] = useState(10);

  const getDefaultValue = () => {
    var defaultValue = JSON.parse(localStorage.getItem(ename));
    if (!!defaultValue) {
      return defaultValue;
    } else {
      return defaultTalent;
    }
  };

  const [point, setPoint] = useState(getDefaultValue);

  const handleDisable = () => {
    if (point.total === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleAdd = (selectTitle) => {
    setPoint((preState) => {
      return {
        ...preState,
        [selectTitle]: point[selectTitle] + 1,
        total: point.total - 1
      };
    });
    // await setTotalPoint((preState) => preState - 1);
  };

  const handleReduce = (selectTitle) => {
    setPoint((preState) => ({
      ...preState,
      [selectTitle]: point[selectTitle] - 1,
      total: point.total + 1
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem(ename, JSON.stringify(point));
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
        <p>剩餘點數:{point.total}</p>
        <button onClick={handleSubmit} disabled={handleDisable()}>
          Submit
        </button>
      </div>
    </StyledFlex>
  );
};
export default TalentItemBlock;
