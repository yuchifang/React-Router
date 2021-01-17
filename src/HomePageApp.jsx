import React, { useEffect, useState } from "react";
import HeroBlock from "./pages/HeroBlock";
import TalentItemBlock from "./pages/TalentItemBlock";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Alert } from "antd";
import { Spinner, Jumbotron, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useHeroes } from "./hook";

const StyledTalenBlock = styled.div`
  padding-top: 100px;
  background-color: #eee;
  padding-bottom: 100px;
  position: relative;
`;

const HomePage = () => {
  const { heroes, state } = useHeroes();
  return (
    <>
      {state === "success" && (
        <BrowserRouter>
          <HeroBlock initialData={heroes} />
          <Switch>
            <StyledTalenBlock>
              <Route path="/heroes/:heroId" component={TalentItemBlock} />
            </StyledTalenBlock>
          </Switch>
        </BrowserRouter>
      )}
      {(state === "loading" || state === "idle") && (
        <Container>
          <Row className="justify-content-center">
            <Jumbotron>
              <Spinner width="90%" animation="border" />
            </Jumbotron>
          </Row>
        </Container>
      )}
      {state === "error" && (
        <Alert
          description="模擬錯誤 請重新整理"
          message="Error"
          type="error"
          showIcon
        />
      )}
    </>
  );
};
export default HomePage;
