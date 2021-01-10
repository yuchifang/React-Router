import React, { useEffect, useState } from "react";
import HeroBlock from "./pages/HeroBlock";
import TalentBlock from "./pages/TalentBlock";
import { BrowserRouter, Switch } from "react-router-dom";
import heroData from "./data/HeroData.json";
import "antd/dist/antd.css";
import { Alert } from "antd";
import { Spinner, Jumbotron, Container, Row } from "react-bootstrap";

const SHUTDOWN_RATE = 0.2;

const HomePage = () => {
  const [initialData, setInitialData] = useState();

  const [webStatus, setWebStatus] = useState("idle");

  useEffect(() => {
    getData()
      .then((res) => {
        setInitialData(res);
        setWebStatus("success");
      })
      .catch((err) => {
        setWebStatus("error");
      });
  }, []);

  // const delay = (ms) => {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  const getData = async () => {
    const a = await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 1000 + 1000)
    );
    if (Math.random() < SHUTDOWN_RATE) {
      throw new Error("模擬錯誤 請重新整理");
    }
    return heroData;
  };
  return (
    <>
      {webStatus === "success" && (
        <BrowserRouter>
          <HeroBlock initialData={initialData} />
          <Switch>
            <TalentBlock initialData={initialData} />
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
