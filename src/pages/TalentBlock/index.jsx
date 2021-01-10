import React from "react";
import { Route } from "react-router-dom";
import TalentItemBlock from "./TalentItemBlock";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledTalenBlock = styled.div`
  padding-top: 100px;
  background-color: #eee;
  padding-bottom: 100px;
`;

const TalentBlock = ({ initialData }) => {
  return <StyledTalenBlock>{
    initialData.map(({ id, ename }) => (
      <Route key={id} path={`/herocard/${ename}`}>
        <TalentItemBlock ename={ename} />
      </Route>
    ))}
  </StyledTalenBlock>;
};

export default TalentBlock;
