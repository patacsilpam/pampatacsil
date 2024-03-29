import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {useLocation} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';



export const NavBar = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  const [showNav, setShowNav] = useState(false);
  return (
    <div className='navBar-fixed'>
      <div className='navBar'>
        <div className='logo'>
          <h1>PAM</h1>
        </div>
        <ul className={`navLinks  ${showNav ? 'active' : ''}`}>
          <li>
            <NavHashLink smooth to="/#home"  style={isActive("#home")? {color: "#594BFF"} : {}}>Home</NavHashLink>
           </li>
           <li>
            <NavHashLink smooth to="/#about" style={isActive("#about")? {color: "#594BFF"} : {}}>About</NavHashLink>
           </li>
           <li>
            <NavHashLink smooth to="/#projects" style={isActive("#projects")? {color: "#594BFF"} : {}}>Projects</NavHashLink>
           </li>
           <li>
            <NavHashLink smooth to="/#contact" style={isActive("#contact")? {color: "#594BFF"} : {}}>Contact</NavHashLink>
           </li>
           
        </ul>
        <div className="menu-burger" onClick={()=>{setShowNav(!showNav)}}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
       </div>
    </div>
    </div>
  )
}
