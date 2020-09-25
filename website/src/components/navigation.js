import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Research from "./research";
import Community from "./community";
import Dementia from "./dementia";
import Outreach from "./outreach";
import Home from "./home";

const Navigation = (props) => {
  return (
    <Switch>
      <Route path="/community">
        <Community />
      </Route>
      <Route path="/research">
        <Research />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dementia">
        <Dementia />
      </Route>
      <Route path="/outreach">
        <Outreach />
      </Route>
      <Route path="/">
        <Home changeTheme={() => props.changeTheme()} />
      </Route>
    </Switch>
  );
};

export default Navigation;
