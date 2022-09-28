import React from 'react'
import './ehealth.css'
import HEM_gunrock from "../../../images/HEM_gunrock.png";
import HEM_ideation from "../../../images/HEM_ideation.png";
import HEM_lofi from "../../../images/HEM_lofi.png";
import HEM_hifi from "../../../images/HEM_hifi.png";

function ehealth() {
  return (
    <div id = "HEM">
        <div className="HEM-title">
            <h1>Improved Health E-Messaging COVID Testing Appointment System</h1>
        </div>
        <div className="HEM-content">
            <div className="HEM-info">
                <h3>About the Project</h3>
                <p>
                    Collaborators: Cameron Yee, Christina Vo, Devin Ly, Eric Ni, Justin Rusit, Mindy Mohr 
                </p>
                <p>
                  The goal was to improve UC Davis' COVID-19 Testing Appointment System by creating a more
                  efficient system for students and improving interface for user usability. 
                </p>
                <p>
                  To do so, we applied the heuristics of Human Computer Interaction to identify points of improvement in user usability and interface. 
                </p>
                <p>
                  Current System:
                  <li>
                    Students + staff must log on roughly a day before their desired 
                    appointment to find a time suitable for them
                  </li>
                  <li>
                    11 pages to click through, each reloading the page
                  </li>
                  <li>
                    Appointment times are a drop-down menu
                  </li>
                </p>
                <p>
                  Points of Improvement (what current system lacks):
                  <li>
                    Long process but cannot track progress 
                  </li>
                  <li>
                    Users were able to proceed forward with appointment system without filling out important information first
                  </li>
                  <li>
                    Once started, appointment must be completed; no way to go back to view a previous page
                  </li>
                  <li>
                    Cannot go back to undo mistakes 
                  </li>
                  <li>
                    No indication if a button was or will be clicked
                  </li>
                  <li>
                    A lot of pages, but very little information on each page (a lot of clicking for user)
                  </li>
                  <li>
                    Information is not saved about the student in the system (inconvenient as COVID tests are taken every 7-14 days)
                  </li>
                </p>
                <p>
                  Added Improvements and HCI Heuristic Used:
                  <li>
                    Progress bar to track user progress for completion (Heuristic 1: Visibility of System Status)
                  </li>
                  <li>
                    Confirmation checkbox (Heuristic 5: Clear notice / warning for error prevention )
                  </li>
                  <li>
                    User cannot continue until the checkbox / confirm is pressed (Constraints)
                  </li>
                  <li>
                    Continue / Back / Cancel buttons present on each pages (Heuristic 4: Consistency and Standards)
                  </li>
                  <li>
                    Allows users to go back and corrct information (Heuristic 3: User Control & Freedom: Allow forgiveness of mistakes)
                  </li>
                  <li>
                    Hovering over the "Cancel" button causes it to turn red (Feedback: Users know they are about to make an important action)
                  </li>
                  <li>
                    Compacted 3 pages of internation into 1, lowering interaction cost (Heuristic 8: Aesthetic/Minimalist) (Usability Goals - Efficiency) 
                  </li>
                  <li>
                    Allowed users to save information from previous bookings, reduces repetition (Usability Goals - Efficiency) 
                  </li>
                </p>
                <p>
                    Process: 
                    <li> 
                        Need Finding: Conducted survey via Google Forms, asked questions regarding the 
                        usability goals of the current system identified pain points, consolidated needfinding data into a persona
                    </li>
                    <li> 
                        Ideation: sketched new model, conducted group discussion/brainstorming sessions, applied suggestions from initial survey
                    </li>
                    <li> 
                        Protoyping: Created Lo-fi prototypes and Hifi design/wireframe using Figma and React.js
                    </li>
                    <li>
                      Iteration: Created multiple lo-fi / hi-fi prototypes, surveyed user again to choose best version, improved design
                    </li>
                </p>
                <p>
                    Languages and Tools: Figma, TML, CSS, JavaScript, ReactJS
                </p>
            </div>
            <div className="HEM-pics">
                <img id = "HEM_gunrock" src={HEM_gunrock}></img> 
                <img id = "HEM_ideation" src={HEM_ideation}></img> 
                <img id = "HEM_lofi" src={HEM_lofi}></img> 
                <img id = "HEM_hifi" src={HEM_hifi}></img> 
            </div>
        </div>
    </div>
  )
}

export default ehealth
