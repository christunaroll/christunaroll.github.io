import React from 'react'
import './About.css'
import profile_pic from "../images/profile_pic.jpg";

function About() {
  return (
    <div id = "about">
        <div className="subject-title">
            <div className='square'></div>
            <h1>About Me</h1>
        </div>
        <div  className='about-content'>
            <div id="description" className='more'>
                <p>
                    Hi! I'm Christina! I am currently a Computer Science major and Biological Sciences minor at UC Davis. 
                    I'm actively exploring opportunities in tech, particularly in software engineering and frontend web development.
                </p>
                <p>
                    In my spare time, I love listening to music (especially Taylor Swift), expressing myself through dance
                    and theatre, and baking. I also love trying different types of foods and am always down to explore anything new.
                </p>
                <p>
                    *what are you passionate about*
                </p>
                <p>
                    If you want to get in touch, please don't hesitate to email me at <b>christina.vo2001@gmail.com</b>. I would love to hear from you!
                </p>
                <p>
                    Thanks for visiting! 
                </p>
            </div>
            <div id="me" className='more'>
                <img id = "profile_pic" src={profile_pic}/>
            </div>
        </div>
    </div>
  )
}

export default About
