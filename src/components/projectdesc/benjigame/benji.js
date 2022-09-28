import React from 'react'
import './benji.css'
import benji_pic from "../../../images/benji_page.png";

function benji() {
  return (
    <div id = "benji">
        <div className="benji-title">
            <h1>Buzz-A-Benji</h1>
        </div>
        <div className="benji-content">
            <div className="benji-info">
                <h3>About Buzz-A-Benji</h3>
                <p>
                    Buzz-A-Benji is a simple random image generator of my friend's beloved dog, Benji.</p>
                <p>
                    When you click on the yellow button, you will be greeted with a wonderful picture of Benji and his adventures.
                </p>
                <p>
                    A page is also included to learn more about Benji!
                </p>
                <p>
                    Languages and Tools: HTML, CSS, JavaScript, ReactJS
                </p>
                <p>
                    <a href="https://github.com/christunaroll/buzz-a-benji">Github</a>
                </p>
            </div>
            <div className="benji-img">
                <img id = "benji-pic" src={benji_pic}></img> 
            </div>
        </div>
    </div>
  )
}

export default benji
