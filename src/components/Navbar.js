import React from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css'

function Navbar(){
  return(
    <div className="nav">
      <ul className="why">
        <li className="nav-tab">
          <NavLink exact to='/' className="nav-tab-txt">HOME</NavLink>
        </li>
        <li className="nav-tab">
          <NavLink to='/til' className="nav-tab-txt">TIL</NavLink>
        </li>
        <li className="nav-tab">
          <NavLink to='/projects' className="nav-tab-txt">PROJECTS</NavLink>
        </li>
      </ul>
    </div>
  )
};

export default Navbar;