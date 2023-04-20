import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
        <a href="#top" className='nav-link'>Home</a>
        <a href="#About" className='nav-link'>About me</a>
        <a href="#Skill" className='nav-link'>Skills</a>
        <a href="#contact" className='nav-link'>Contact</a>
    </nav>
  )
}
