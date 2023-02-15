import React from 'react'
import svg from '../../assets/react.svg'
import projects from '../../data/projects.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightLong, faArrowUp, faArrowUpRightFromSquare, faFolderBlank, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

export const Task = () => {
  return (
    <section className='project' id='projects'>
      <h1>Projects</h1>
      <div className="project-section">
          {projects.map(project => {
            return (
              <div key={project.id}>
                  <img loading='lazy' src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fmms.businesswire.com%2Fmedia%2F20210216006039%2Fen%2F859393%2F23%2Fvercel.jpg&imgrefurl=https%3A%2F%2Fwww.businesswire.com%2Fnews%2Fhome%2F20210216006039%2Fen%2FVercel-Debuts-Agency-Partner-Program-and-Experts-Marketplace-to-Help-Global-Enterprises-Improve-Web-User-Experience&tbnid=QWd1vQAoVqBjUM&vet=12ahUKEwjvjKzs4Zb9AhXHC94KHfa2BNoQMygDegUIARDkAQ..i&docid=vfNVJwsFxUwnnM&w=1200&h=627&q=vercel&ved=2ahUKEwjvjKzs4Zb9AhXHC94KHfa2BNoQMygDegUIARDkAQ' />
                  <div className="img-overlay">
                    <div>
                      <a href={project.live_url} target={'_blank'}><FontAwesomeIcon icon={faArrowUpRightFromSquare}  /></a>
                      <a href={project.github_link} target={'_blank'}><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <small>{project.tools}</small>
                  </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
