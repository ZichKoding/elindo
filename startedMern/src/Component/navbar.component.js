import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Table List
      </Link>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/third" className="nav-link">
              This is Third
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/fourth" className="nav-link">
              This is Fourth
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/table" className="nav-link">
              This is Table
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
