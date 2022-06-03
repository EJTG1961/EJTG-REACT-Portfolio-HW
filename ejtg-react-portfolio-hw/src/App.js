import React from "react";

import "./App.css";
import Wrapper from "./components/wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/About" component={About} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
