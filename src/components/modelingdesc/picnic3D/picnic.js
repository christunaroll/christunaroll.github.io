import React from 'react'
import './picnic.css'
import picnic_pic from "../../../images/final_v2.jpg";

function picnic() {
  return (
    <div id = "picnic">
        <div className="picnic-title">
            <h1>3D Picnic</h1>
        </div>
        <div className="picnic-content">
            <div className="picnic-info">
                <h3>More Info</h3>
                <p>
                    Tools: Autodesk Maya
                </p>
            </div>
            <div className="picnic-img">
                <img id = "picnic-pic" src={picnic_pic}></img>
            </div>
        </div>
    </div>
  )
}

export default picnic
