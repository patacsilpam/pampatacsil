import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faInstagram ,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
export const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <div>
            <h1>Let's connect!</h1><br /><br />
            <a href="mailto:pammpatacsil@gmail.com" className='email'>pammpatacsil@gmail.com</a>
        </div>
    </section>
  )
}
