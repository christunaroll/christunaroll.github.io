import React from 'react'
import { experiencesInfo } from "./experiencesInfo"
import ProjectCards from "../personal-projects/ProjectCards";

function Experiences() {
  return (
    <div id="experiences">
      <div className = 'grid-containers'>
            <ProjectCards data={experiencesInfo} />
        </div>
    </div>
  )
}

export default Experiences
