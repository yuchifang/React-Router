import React from "react";
import HomePage from "./HomePageApp";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/heroes" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;

//加上CustomHook
//沒有網路的情況
