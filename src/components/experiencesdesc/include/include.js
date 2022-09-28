import React from 'react'
import './include.css'
import nvsi from "../../../images/nvsi_page.png";

function include() {
  return (
    <div id = "include">
        <div className="include-title">
            <h1>#include at UC Davis</h1>
        </div>
        <div className="include-content">
            <div className="include-info">
                <h3>About #include at UC Davis</h3>
                <p>
                    #include is an organization at UC Davis that builds websites and mobile applications 
                    for local organizations in the community to promote technical growth.</p>
                <p>
                    Role: Frontend Developer 
                </p>
                <p>
                    Contributions: Create webpages for UC Davis' New Vietnam Studies Initiative (NVSI).
                    <li> 
                        "Coming Soon" page 
                    </li>
                    <li> 
                        "Get Involved" page 
                    </li>
                    <li> 
                        "White Papers" page 
                    </li>
                </p>
                <p>
                    The White Papers page includes a toggle that users to switch between viewing Abtracts and White Papers documents.
                    Users may also filter thought the abstracts and white papers through a search bar that filters
                    papers through topics indicates in the yellow tab. 
                </p>
                <p>
                    The Get Involved Page allows users to read testimonals from students involved with NVSI.
                </p>
                <p>
                    Languages and Tools: HTML, CSS, JavaScript, ReactJS
                </p>
                <p>
                    All the pages are responsive on mobile devices.
                </p>
                <p>
                    Website: <a href="https://newvietnam.ucdavis.edu/">New Vietnamese Studies Initiative</a>
                </p>
                <p>
                    <a href="https://github.com/include-davis/nvsi">Github</a>
                </p>
            </div>
            <div className="include-pics">
                <img id = "nvsi" src={nvsi}></img> 
            </div>
        </div>
    </div>
  )
}

export default include