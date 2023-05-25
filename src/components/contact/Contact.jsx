import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u9gykxg', 'template_iq56p3f', form.current, '24yvWhC0U4z4GkY1s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
    }


      
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>dummyemail.com</h5>
            <a href="mailto:dummyemail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>m.me/iwnn.dye</h5>
            <a href="https://m.me/iwnn.dye" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456778999</h5>
            <a href="https://api.whatsapp.com/send?phone+639752276475" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' />
          <input type="text" name='email' placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
