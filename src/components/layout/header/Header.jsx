import React from 'react'
import './Header.scss'
import { FaBars, FaTimes} from "react-icons/fa/";
import { BiLogIn } from "react-icons/bi";
import Logo from '../../../assest/Karyar.png'
import { NavLink,Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useState } from 'react';
function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
         <nav>
          <Link >
            <img src={Logo} id='img' width="133" height="47" alt="" />
          </Link>
          <div>
            <ul id="navbar" className={click ? "nav-menu active" : "nav-menu"}>
              <li> 
                <NavLink className="navlink active" to="/">خانه</NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/courses"> دوره‌های آموزشی</NavLink>
              </li>
              <li id='dropdown'>
              <NavDropdown title="همکاری با کاریار"  style={{fontWeight:'bold',fontSize:"1.2rem"}} id="basic-nav-dropdown">
              <NavDropdown.Item className='drop'>
              <NavLink  className="navlink-drop" to="/karyarval">همکاری با کاریار</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              استودیو کاریار
              </NavDropdown.Item>
              </NavDropdown>
              </li>
                <li >
                <NavDropdown title="درباره کاریار" style={{fontWeight:'bold',fontSize:"1.2rem"}} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" >
              <NavLink  className="navlink-drop" to="/karyarteam"> تیم کاریار </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <NavLink  className="navlink-drop" to="/about">  دریاره کاریار </NavLink>
                
              </NavDropdown.Item>
            </NavDropdown>
              </li>
            </ul>
          </div>
          <NavLink to="/login"  style={{ color: "#17cf97",textDecoration: "none" }}>
                        <BiLogIn  id='log'size={32} />
                        ورود به سامانه آموزشی

          </NavLink>
          <div className="mobile" onClick={handleClick}>
        {click ? (
          <i><FaTimes size={20} style={{ color: "#626262" }} /></i>
        ) : (
          <i><FaBars size={20} style={{ color: "#626262" }} /></i>
        )}
      </div>
        </nav>
    </div>
  )
}

export default Header