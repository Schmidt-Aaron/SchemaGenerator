import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SpecialAnnouncement from "./pages/SpecialAnnounce";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Article from "./pages/Article";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/special">
          <SpecialAnnouncement />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/article">
          <Article />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
