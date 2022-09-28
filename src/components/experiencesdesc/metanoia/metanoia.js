import React from 'react'
import './metanoia.css'
import metanoia_pic from "../../../images/metanoia_page.png";


function metanoia() {
  return (
    <div id = "metanoia">
        <div className="metanoia-title">
            <h1>Metanoia</h1>
        </div>
        <div className="metanoia-content">
            <div className="metanoia-info">
                <h3>About Metanoia</h3>
                <p>
                    Metanoia is upcoming EdTech startup that seeks to put social issues at the forefront of children’s lives through a virtual interactive library. Metanoia bridges the communication gap between parents/teachers and students by tailoring personalized book recommendations that foster meaningful discussions. 
                </p>
                <p>
                    Role: Frontend Developer 
                </p>
                <p>
                    Contributions: Implementing design and responsiveness for Landing, About, Contact, and Subscribe page.  
                </p>
                <p>
                    Languages and Tools: HTML, CSS, Javascript, ReactJS
                </p>
                <p>
                    Website: <a href="http://metanoia-books.herokuapp.com/">Metanoia</a> 
                </p>
                <p>
                    <a href="https://github.com/christunaroll/metanoia-Clone">Github</a>
                </p>
            </div>
            <div className="metanoia-img">
                <img id = "metanoia-pic" src={metanoia_pic}></img> 
            </div>
        </div>
    </div>
  )
}

export default metanoia
