import React, { useEffect, useState } from "react";
import HeroBlock from "./HeroBlock";
import TalentBlock from "./TalentBlock";
import { BrowserRouter, Switch } from "react-router-dom";
import { heroData } from "../data/HeroData";

const SHUTDOWN_RATE = 0.2;

const HomePage = () => {

  const [initialData, setInitialData] = useState()

  const [webStatus, setWebStatus] = useState("idle")

  const getData = async () => {
    if (Math.random() < SHUTDOWN_RATE) {
      throw new Error("模擬錯誤 請重新整理")
    }
    setWebStatus("loading")
    delay(3000)
    return heroData
  }

  const delay = (ms) => {
    setTimeout(() => { }, ms)
  }

  useEffect(() => {
    getData()
    setInitialData(heroData)
  }, [])

  return (
    <BrowserRouter>
      <HeroBlock initialData={initialData} />
      <Switch>
        <TalentBlock />
      </Switch>
    </BrowserRouter>
  )
};
export default HomePage;
