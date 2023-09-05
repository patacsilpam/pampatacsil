import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from 'emailjs-com'
import { useRef } from 'react';
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
export const Contact = () => {
  const form = useRef();
  const [message,setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_j2mxsx5',
      'template_skafkca',
      form.current,
      'WLxuJOOeahdG1w9Xa')
      .then((result) => {
          setMessage('Message sent successfully');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
         
    <section className='contact' id='contact'>
      <div>
          <h1>CONTACT ME</h1>
          <span>
              <FontAwesomeIcon icon={faEnvelope} size='xl' className='icon'/>&emsp;
              <span>pamelampatacsil@gmail.com</span>
            </span>
          <span>
            <FontAwesomeIcon icon={faPhone} size='xl' className='icon'/>&emsp;
            <span style={{marginLeft:5}}>(+63) 919-3720-476</span>
          </span>
      </div>
      <div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" placeholder='Full Name' />
            <label>Email</label>
            <input type="email" name="user_email" placeholder='Email address' />
            <input type="email" name="to_email" value="pamelampatacsil@gmail.com" hidden/>
            <label>Message</label>
            <textarea name="message"  placeholder='Your Message'/>
            <p>{message}</p>
            <input type="submit" id='btn-submit' value="Send" />
          </form>
      </div>
    </section>
  )
}
{/*
<div>
        <h1>Let's connect!</h1><br />
        <a href="mailto:pamelampatacsil@gmail.com">pamelampatacsil@gmail.com</a>
      </div>
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