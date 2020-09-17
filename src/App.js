import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Banner from "./components/banner";
import Footer from "./components/footer";
import SpecialAnnouncement from "./pages/SpecialAnnounce";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/special">Special Announcement</Link>
            </li>
            <li>
              <Link to="/faq">FAQ Schema</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/special">
            <SpecialAnnouncement />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
