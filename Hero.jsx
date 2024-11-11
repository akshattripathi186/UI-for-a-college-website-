import React from 'react'
import './Hero.css'
import dark from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero Container'>
        <div className='hero-text'>
            <h1>we ensure a better guidence for a better world</h1>
            <p>"Edusity guides you to your dream job with personalized support, skill-building, and interview prep. Start your journey to a successful career with us."</p>
            <button className='btn'>Explore more <img src={dark} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
