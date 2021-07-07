import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <p>Nicolas Salazar</p>
      <Link  to="/"><p>HOME</p></Link>
      <Link  to="/portfolio-products"><p>PORTFOLIO</p></Link>
      <Link  to="/contact"><p>CONTACT</p></Link>
    </div>
  );
}

export default Nav;