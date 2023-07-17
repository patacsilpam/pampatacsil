import React from 'react'
import img from '../../assets/profile.jpg'
export const About = () => {
  return (
    <section className='about' id='about'>
        <div className='about-section'>
          <h1>About Me</h1>
          <p>
            Hi! My name is Pamela. You can call me Pam. I graduated with an IT degree from Urdaneta City University. 
            Throughout college, I immersed myself in various projects that allowed me to hone my skills in developing software. 
            I successfully developed static websites, Android mobile applications, and full-stack web applications. <br /><br />
             <br /><br />
            I am highly interested in pursuing software development.  
            I have a huge passion for building software, as it allows me to combine my technical skills with my problem-solving abilities. 
            I find personal satisfaction in turning ideas into functional and user-friendly software solutions. 
          </p>
          <p>
            {/*
              During my internship, I was assigned as an AI Prompt Engineer, where my responsibilities included crafting and fine-tuning prompts to optimize 
              the performance of the conversational AI model. I took great pride in my contributions, as my efforts played a crucial role 
              in enhancing conversational AI's capabilities.
              I am particularly interested in exploring emerging technologies, 
              like artificial intelligence, and creating innovative software solutions. 
              I am committed to staying ahead of the curve, constantly seeking new opportunities 
              to broaden my skillset and contribute to the advancement of the industry.

              I graduated with a Bachelor of Science in Information Technology from Urdaneta City University. 
              Throughout my academic journey, I developed several projects including static websites, 
              android mobile applications, and full-stack web applications.  
              During my internship at TMDC IT SOLUTIONS further enhanced my 
              skills and knowledge in the field. As an AI Prompt Engineer, I was responsible for designing and 
              fine-tuning prompts to optimize the performance of their conversational AI system.  
              This role required a deep understanding of natural language processing and machine learning techniques, 
              as well as a creative mindset to generate effective prompts that improved the model's performance.
              This opportunity not only honed my skills but also provided valuable insights 
              into the practical applications of AI in real-world scenarios.
              Currently, I am highly interested in pursuing the development of both mobile and web applications. 
              My experienced in web development, mobile application development, and AI prompts engineering, 
              coupled with my dedication to continuous learning, positions me as a capable and motivated 
              ready to make a meaningful impact in the industry.
            */}
          </p>
        </div>
        <div className='about-section'>
          <img src={img} alt="" />
        </div>
      </section>
  )
}
