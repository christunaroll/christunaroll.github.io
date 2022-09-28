import React from 'react'
import './pantry.css'

function pantry() {
  return (
    <div id = "pantry">
        <div className="pantry-title">
            <h1>The Pantry at UC Davis </h1>
        </div>
        <div className="pantry-content">
            <div className="pantry-info">
                <h3>About The Pantry</h3>
                <p>
                    The Pantry is a student-led organization that provides food and other basic essentials to UC Davis students and staff who would like support in obtaining resources.
                </p>
                <p>
                    Role: Full Stack Developer 
                </p>
                <p>
                    Contribution: Improving the ordering system architecture and its interface for users, as well as improving the inventory interface for staff workers.  
                </p>
                <p>
                    Languages and Tools: Django, ReactJS
                </p>
                <p>
                    The website is still currently under construction :)
                </p>
            </div>
        </div>
    </div>
  )
}

export default pantry
