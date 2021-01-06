import React, { useState } from "react";
import { Route } from "react-router-dom";
import { heroData } from "../../data/HeroData";
import TalentItemBlock from "./TalentItemBlock";
import styled from "styled-components";
const StyledTalenBlock = styled.div`
  padding-top: 100px;
  background-color: #eee;
  padding-bottom: 100px;
`;

const TalentBlock = () => {
  const RenderTalentArr = heroData.map(({ id, ename }) => (
    <Route key={id} path={`/herocard/${ename}`}>
      <TalentItemBlock ename={ename} />
    </Route>
  ));
  return <StyledTalenBlock>{RenderTalentArr}</StyledTalenBlock>;
};

export default TalentBlock;
