import React, { useEffect, useState } from "react";
import HeroBlock from "./HeroBlock";
import TalentBlock from "./TalentBlock";
import { BrowserRouter, Switch } from "react-router-dom";
import { heroData } from "../data/HeroData";

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

  const getData = async () => {
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
            <TalentBlock />
          </Switch>
        </BrowserRouter>
      )}
      {(webStatus === "loading" || webStatus === "idle") && <h1>Loading</h1>}
      {webStatus === "error" && <h1>模擬錯誤 請重新整理</h1>}
    </>
  );
};
export default HomePage;
