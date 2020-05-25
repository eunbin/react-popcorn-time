import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home.js";
import TV from "Routes/TV.js";
import Search from "Routes/Search.js";

export default () => (
  <Router>
    <>
      <Route path="/" exact component={Home}/>
      <Route path="/tv" exact component={TV}/>
      <Route path="/search" exact component={Search}/>
    </>
  </Router>
)
