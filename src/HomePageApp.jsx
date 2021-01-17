import React, { useEffect, useState } from "react";
import HeroBlock from "./pages/HeroBlock";
import TalentItemBlock from "./pages/TalentItemBlock";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Alert } from "antd";
import { Spinner, Jumbotron, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useHerosCard } from "./hook"


const StyledTalenBlock = styled.div`
  padding-top: 100px;
  background-color: #eee;
  padding-bottom: 100px;
  position:relative;
`;

const HomePage = () => {

  const { initialData, webStatus } = useHerosCard()
  return (
    <>
      {webStatus === "success" && (
        <BrowserRouter>
          <HeroBlock initialData={initialData} />
          <Switch>
            <StyledTalenBlock>
              <Route path="/heroes/:heroId" component={TalentItemBlock} />
            </StyledTalenBlock>
          </Switch>
        </BrowserRouter>
      )}
      {(webStatus === "loading" || webStatus === "idle") && (
        <Container>
          <Row className="justify-content-center">
            <Jumbotron>
              <Spinner width="90%" animation="border" />
            </Jumbotron>
          </Row>
        </Container>
      )}
      {webStatus === "error" && (
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
