import React from 'react'
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import logo from "../images/CV_Logo.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/"><img src={logo}/></Link>
        </div>
        <div className="list-wrapper">
            <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Portfolio</a></li>
            {/*<li><a href="#contact">Contact</a></li>*/}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
