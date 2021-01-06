import React from "react";
import HeroBlock from "./HeroBlock";
import TalentBlock from "./TalentBlock";
import { BrowserRouter, Switch } from "react-router-dom";
const HomePage = () => (
  <BrowserRouter>
    <HeroBlock />
    <Switch>
      <TalentBlock />
    </Switch>
  </BrowserRouter>
);
export default HomePage;
