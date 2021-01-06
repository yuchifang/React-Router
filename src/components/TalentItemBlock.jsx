import React, { useState } from "react";
import SelectorItem from "../components/SelectorItem";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TalentItemBlock = () => {
  const [totalPoint, setTotalPoint] = useState(30);

  const [point, setPoint] = useState({
    str: 0,
    int: 0,
    agi: 0,
    luk: 0
  });

  const handleDisable = () => {
    if (totalPoint === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleAdd = async (selectTitle) => {
    await setPoint((preState) => {
      return {
        ...preState,
        [selectTitle]: point[selectTitle] + 1
      };
    });
    await setTotalPoint((preState) => preState - 1);
  };

  const handleReduce = async (selectTitle) => {
    await setPoint((preState) => ({
      ...preState,
      [selectTitle]: point[selectTitle] - 1
    }));
    await setTotalPoint((preState) => preState + 1);
  };

  const handleSubmit = () => {};
  return (
    <StyledFlex>
      <div>
        <SelectorItem
          totalPoint={totalPoint}
          point={point}
          onReduce={handleReduce}
          onAdd={handleAdd}
          name="STR"
        />
        <SelectorItem
          totalPoint={totalPoint}
          point={point}
          onReduce={handleReduce}
          onAdd={handleAdd}
          name="INT"
        />
        <SelectorItem
          totalPoint={totalPoint}
          point={point}
          onReduce={handleReduce}
          onAdd={handleAdd}
          name="AGI"
        />
        <SelectorItem
          totalPoint={totalPoint}
          point={point}
          onReduce={handleReduce}
          onAdd={handleAdd}
          name="LUK"
        />
      </div>
      <div>
        <p>剩餘點數:{totalPoint}</p>
        <button onClick={handleSubmit} disabled={handleDisable()}>
          Submit
        </button>
      </div>
    </StyledFlex>
  );
};
export default TalentItemBlock;
