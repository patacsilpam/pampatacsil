import React from 'react'
import svg from '../../assets/react.svg'
import projects from '../../data/projects.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightLong, faArrowUp, faArrowUpRightFromSquare, faFolderBlank, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

export const Task = () => {
  return (
  <section className='project' id='projects'>
      <h1>FEATURED PROJECTS</h1>
      <div className="project-section">
          {projects.map(project => {
            return (
              <div key={project.id}>
                  <img  src={project.img} alt={project.title}/>
                  <div className="img-overlay">
                      <div>
                        <a href={project.live_url} target={'_blank'}><FontAwesomeIcon icon={faArrowUpRightFromSquare}  /></a>
                        <a href={project.github_link} target={'_blank'}><FontAwesomeIcon icon={faGithub} /></a>
                      </div>
                      <div>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                      </div>
                     <div>
                        <small>{project.tools}</small>
                     </div>
                  </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
