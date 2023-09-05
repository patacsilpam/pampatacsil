import React,{useRef,useEffect} from 'react'
import { NavHashLink } from 'react-router-hash-link';
import resume from '../../assets/pdf/Patacsil,Pamela-CV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion,useScroll } from 'framer-motion';
motion
export const Home = () => { 
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: {duration: 0.5}},
    hidden: { opacity: 0, scale: 0 },
  }
  return (
      <section className='home'>
          <div>
            <span >&#128075; Hello there, I am</span>
            <h1><span>Pamela Patacsil</span></h1>
            <p>A passionate software developer based in the Philippines, who turns dreams into code, one line at a time.</p><br />
            <div className='link-section'>
              <div>
                <a href="/#contact" id='btn-get-in-touch' target="_blank">Get in Touch</a>
              </div>
              <div>
                <a href={resume} id='btn-download-cv' target="_blank">
                  <FontAwesomeIcon icon={faArrowDown} />&nbsp;
                  Resume
                </a>
              </div>
            </div>
          </div>
      </section>
  )
}
