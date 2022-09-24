import React from 'react'
import { modelingInfo } from "./modelingInfo"
import ProjectCards from "../personal-projects/ProjectCards";

function Modelling() {
  return (
    <div>
      <div id="modeling">
      <div className = 'grid-containers'>
            <ProjectCards data={modelingInfo} />
        </div>
    </div>
    </div>
  )
}

export default Modelling
