import React, { useState, useEffect } from "react";
import SelectorItem from "../components/SelectorItem";
import styled, { keyframes } from "styled-components";
import { Button } from 'react-bootstrap';
import { Alert } from "antd";
import { useHeroTalent } from "../hook"

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin:15px;
`
const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const StyledError = styled.div`
  opacity: 0;
  position: absolute;
  height: 150px;
  width: 300px;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  animation: ${fadeOut} 2s
`


const TalentItemBlock = ({ match }) => {

  const { heroId } = match.params
  const { webStatus, point, handleAdd, handleReduce, updateUser } = useHeroTalent(heroId)
  const [updateStatus, setUpdateStatus] = useState("idle")

  console.log("point", point)
  //解決方式 把point 放到 custom hooks?

  const handleSubmitBtnDisable = () => {
    if (point.total === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    setUpdateStatus("loading")
    updateUser()
      .then((res) => {
        setUpdateStatus("success")
      })
      .catch((err) => {
        setUpdateStatus("error")
      })
  };

  return (
    <>
      {
        updateStatus === "error" &&
        <StyledError>
          <Alert
            message="Error"
            description="更新錯誤"
            type="error"
            showIcon
          />
        </StyledError>
      }
      { webStatus === "success" && (
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
        </StyledFlex>)
      }
    </>
  )
};
export default TalentItemBlock;
