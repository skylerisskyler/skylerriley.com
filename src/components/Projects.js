import React from 'react';
import Notifar from '../../static/notifar.jpg';
import ReactLogo from '../../static/react-logo.png';

const ProjectBox = () => {
  return (
    <div className="project-item">
      <h3>Notifar</h3>
      <img className="project-thumb" src={Notifar} />
      <p>A short description for the project.</p>
      <div className="project-tech-container">
        <div className="project-tech-item" >
          <img src={ReactLogo} />
          <p>ReactJS</p>
        </div>
      </div>
      <div className="button-container">
        <button>App</button>
        <button>Source</button>
      </div>
    </div>
  )
}

const Projects = () => {
  
  return (
    <div className="projects">
      <div className="projects-background">
        <div className="projects-content">
          <h1>Projects</h1>
          <div className="projects-list">
            <ProjectBox />
            <ProjectBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
