import React, { useState, useEffect } from "react";
import SelectorItem from "../components/SelectorItem";
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import axios from "axios"

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin:15px;
`

const defaultTalentValue = {
  str: 0,
  int: 0,
  agi: 0,
  luk: 0,
  total: 0
};

const TalentItemBlock = ({ match }) => {

  const { heroId } = match.params
  const [point, setPoint] = useState(defaultTalentValue);

  useEffect(() => {
    console.log("wwwwwwwww");
    axios.get(`http://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
      .then((res) => {
        const heroApiPoint = res.data

        setPoint({ ...point, ...heroApiPoint })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [heroId])

  // useEffect(() => {
  //   const getLocalStorageValue = () => {
  //     const localStorageValue = JSON.parse(localStorage.getItem(heroId));
  //     if (!!localStorageValue) {
  //       setPoint(localStorageValue)
  //     } else {
  //       setPoint(defaultTalentValue)
  //     }
  //   };
  //   getLocalStorageValue()
  // }, [heroId])



  const handleSubmitBtnDisable = () => {
    if (point.total === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    localStorage.setItem(heroId, JSON.stringify(point));
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
