import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='Container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Proogram</li>
            <li>AboutUs</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
