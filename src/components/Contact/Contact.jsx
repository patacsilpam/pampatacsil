import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faInstagram ,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com'
import { useRef } from 'react';
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_j2mxsx5',
      'template_skafkca',
      form.current,
      'WLxuJOOeahdG1w9Xa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
         
    <section className='contact' id='contact'>
      <div>
        <h1>Let's connect!</h1><br />
        <a href="mailto:pamelampatacsil@gmail.com">pamelampatacsil@gmail.com</a>
      </div>
    </section>
  )
}
{/*
        <section className='contact' id='contact'>
            <div>
            <h1>Let's connect!</h1><br /><br />  
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <input type="email" name="to_email" value="pammpatacsil@gmail.com" hidden/>
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
*/}     