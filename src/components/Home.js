import React from 'react'
import "./Home.css";
import About from './About'; 
import All from './AllProjects'; 
import laptop_cat from "../images/LaptopCat.svg";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        {/* TITLE SLIDE */}
        <div className="main_title anim-typewriter">
            <h1>Hi! I'm Christina!</h1>
        </div>
        {/* PIC */}
        <div className='pic'>
          <img id = "hero_pic" src={laptop_cat}/>
        </div>
      </div>
      <div className="sections">
        <All id="projects">PROJECTS</All>
        <About id="about">ABOUT</About>
      </div>
    </div>
  )
}

export default Home