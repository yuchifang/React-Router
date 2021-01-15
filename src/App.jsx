import React from "react";
import HomePage from "./HomePageApp";
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/herogulp" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
};
export default App;

//怎麼loading
