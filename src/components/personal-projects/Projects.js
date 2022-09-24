import React from 'react'
import './Projects.css'
import { projectInfo } from "./projectInfo"
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div id = "personal-projects">
        <div className = 'grid-containers'>
            <ProjectCards data={projectInfo} />
        </div>
    </div>
  )
}

export default Projects
