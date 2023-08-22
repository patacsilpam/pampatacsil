import React,{useRef,useEffect} from 'react'
import resume from '../../assets/pdf/Patacsil,Pamela-Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
export const Home = () => { 
 
  return (
      <section className='home' id='home'>
          <div>
            <span >&#128075; Hello, I'm</span>
            <h1><span>Pam Patacsil</span></h1>
            <p>A passionate software developer who turns dreams into code, one line at a time.</p>
            <div><br />
              <a href={resume} className='btn-download-cv' target="_blank">Resume</a>
            </div>
          </div>
      </section>
  )
}
