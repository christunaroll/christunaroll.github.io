import React from 'react'
import './cup.css'
import cup_pic from "../../../images/white_mug.jpg";

function cup() {
  return (
    <div id = "cup">
        <div className="cup-title">
            <h1>3D Cup</h1>
        </div>
        <div className="cup-content">
            <div className="cup-info">
                <h3>More Info</h3>
                <p>
                    Tools: Autodesk Maya
                </p>
            </div>
            <div className="cup-img">
                <img id = "cup-pic" src={cup_pic}></img>
            </div>
        </div>
    </div>
  )
}

export default cup
