import React from 'react'
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className = "footer">
        <div className="subject-title">
            <div className='square'></div>
            <h1>Contact Me</h1>
        </div>
        <div className='social-media'>
            <div>
                <SocialIcon id="linkedin" url="https://www.linkedin.com/in/christinavo7/" />
            </div>
            <div>
                <SocialIcon id="github" url="https://github.com/christunaroll" />
            </div>
            <div>
                <SocialIcon id="mail" url="mailto:christina.vo2001@gmail.com" />
            </div>
        </div>
        <p className="footer_description">Designed and coded by Christina Vo</p>
    </div>
  )
}

export default Footer
