import React from 'react';
import NotifarThumbnail from '../../static/notifar.jpg';
import InventaroThumbnail from '../../static/inventaro.gif';
import ReactLogo from '../../static/react-logo.png';
import GraphqlLogo from '../../static/graphql-logo.png';
import TsLogo from '../../static/ts-logo.png';
import MongoDbLogo from '../../static/mongodb-logo.png';
import NodeJsLogo from '../../static/nodejs-logo.png';
import { graphql } from 'gatsby';

const tech = {
  react: {
    title: 'ReactJS',
    logo: ReactLogo
  },
  graphql: {
    title: 'GraphQL',
    logo: GraphqlLogo
  },
  ts: {
    title: 'Typescript',
    logo: TsLogo
  },
  mongodb: {
    title: 'MongoDB',
    logo: MongoDbLogo
  },
  nodejs: {
    title: 'NodeJS',
    logo: NodeJsLogo
  }
}

const ProjectTech = (props) => {
  return props.technologies.map(technology => {
    const t = tech[technology];
    return (
      <div className="project-tech-item" key={t.title}>
        <img src={t.logo} alt={t.title}/>
        <p>{t.title}</p>
      </div>
    )
  })
}

const ProjectBox = (props) => {
  return (
    <div className="project-item">
      <h3>{props.title}</h3>
      <img className="project-thumb" src={props.thumbnail} />
      <p>{props.description}</p>
      <div className="project-tech-container">
        <ProjectTech 
          technologies={props.technologies}
        />
      </div>
      <div className="button-container">
        {
          props.locations.map(location => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={location.href}
            >
              <button
              >
                {location.title}
              </button>
            </a>
          ))
        }
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
            <ProjectBox
              title={'Inventaro'}
              thumbnail={InventaroThumbnail}
              description={"PoS / Inventory Management System"}
              technologies={['react', 'nodejs', 'mongodb', 'graphql']}
              locations={[
                {title: 'App', href: "https://inventaro.io"},
                {title: 'Front Source', href: "https://github.com/rileyskyler/inventaro-frontend"},
                {title: 'Back Source', href: "https://github.com/rileyskyler/inventaro-backend"}
              ]}
            />
            <ProjectBox 
              title={'Notifar'}
              thumbnail={NotifarThumbnail}
              description={"Geolocation tracking via SMS"}
              technologies={['ts', 'react', 'nodejs', 'mongodb', 'graphql']}
              locations={[
                {title: 'Front Source', href: "https://github.com/rileyskyler/notifar-lib"},
                {title: 'Back Source', href: "https://github.com/rileyskyler/notifar-ui"}
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
