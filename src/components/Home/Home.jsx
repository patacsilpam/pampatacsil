import React,{useRef,useEffect} from 'react'
import resume from '../../assets/pdf/PATACSIL_PAMELA_M - RESUME.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
export const Home = () => { 
 
  return (
      <section className='home' id='home'>
          <div>
            <span >&#128075; Hello, I'm</span>
            <h1><span>Pam Patacsil</span></h1>
            <p>I have a huge passion on developing web & mobile applications.</p>
            <div><br />
              <a href={resume} className='btn-download-cv' target="_blank">Resume</a>
            </div>
          </div>
      </section>
  )
}
