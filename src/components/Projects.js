import React from 'react';

const ProjectBox = () => {
  return (
    <div>
      test
    </div>
  )
}

const Projects = () => (
  <div className="projects">
    <div className="projects-background">
      <div className="projects-content">
        <h1>Projects</h1>
        <div className="projects-list">
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </div>
      </div>
    </div>
  </div>
)

export default Projects;
