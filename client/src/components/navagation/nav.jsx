import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link  to="/"><p>HOME</p></Link>
      <Link  to="/portfolio-products"><p>PORTFOLIO</p></Link>
      <Link  to="/contact"><p>CONTACT</p></Link>
      <Link to="/about-me"><p>ABOUT ME</p></Link>
    </div>
  );
}

export default Nav;