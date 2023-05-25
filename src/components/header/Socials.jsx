import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Socials = () => {
  return (
    <div className='socials'>
        <a href="github.com" target='_blank'><BsLinkedin /></a>
        <a href="linkedin.com" target='_blank'><FaGithub /></a>
        <a href="dribble.com" target='_blank'><BsTwitter /></a>
    </div>
  )
}

export default Socials
