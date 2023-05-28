import React from 'react'
import img from '../../assets/profile.jpg'
import { Skills } from './Skills'
export const About = () => {
  return (
    <section className='about' id='about'>
        <div className='about-section'>
          <h1>About Me</h1>
          <p>
            I am a <b>fourth-year student taking up a Bachelor of Science
            in Information Technology</b> at Urdaneta City University.
            At uni, I work on projects such as websites, web applications, and mobile applications.
          </p>
          <p>
            I am particularly interested in exploring emerging technologies, 
            like artificial intelligence, and creating innovative software solutions. 
            I am committed to staying ahead of the curve, constantly seeking new opportunities 
            to broaden my skillset and contribute to the advancement of the industry.
          </p>
        </div>
        <div className='about-section'>
          <img src={img} alt="" />
        </div>
      </section>
  )
}
