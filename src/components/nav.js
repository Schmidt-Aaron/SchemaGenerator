import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header className="header">
    <div>
      <h1>
        <Link to="/">Schema Generator</Link>
      </h1>
    </div>
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
  </header>
);

export default NavBar;
