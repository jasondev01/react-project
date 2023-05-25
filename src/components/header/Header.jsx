import React from 'react'
import './header.css'
import CTA from './CTA'
import Socials from './Socials'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
        <div className="container header_container">

          <h5>Hello I am</h5>
          <h1>Jason Ruben</h1>
          <h5 className='text-light'>Full-stack Developer</h5>

          <CTA />
          
          <Socials />

          <div className="me">
            <img src={ME} alt="me"/>
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
