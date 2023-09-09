import React from 'react'
import img from '../../assets/profile.jpg'
import { motion } from 'framer-motion'
export const About = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    duration:{transition: 5}
  }
  return (
    <section className='about' id='about'>
        <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants} className='about-section'>
          <h3>PAMELA M. PATACSIL</h3>
          <p>
            Hi! My name is Pamela. You can call me Pam. I graduated with an IT degree from Urdaneta City University. 
            Throughout college, I immersed myself in various projects that allowed me to hone my skills in developing software. 
            I successfully developed static websites, Android mobile applications, and full-stack web applications.
             <br /><br />
            Currently, I am highly interested in pursuing software development.  
            I have a huge passion for building software, as it allows me to combine my technical skills with my problem-solving abilities. 
            I find personal satisfaction in turning ideas into functional and user-friendly software solutions. 
          </p>
        </motion.div>
        <div className='about-section'>
          <h1>ABOUT ME</h1>
          <img src={img} alt="Pam Patacsil" />
        </div>
      </section>
  )
}
