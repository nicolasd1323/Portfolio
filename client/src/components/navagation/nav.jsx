import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
  return (
    <nav>
    <div className="nav-container">
      <div className="left-container">
        <p>Nicolas Salazar</p>
      </div>
      <div className="right-container">
            <Link to="/"><p>HOME</p></Link>
          </div>
          <div className="right-container">

            <Link to="/portfolio-products"><p>PORTFOLIO</p></Link>
            </div >
    <div className="right-container">
            <Link to="/contact"><p>CONTACT</p></Link>
            </div>
      </div>
      </nav>
  );
}

export default Nav;