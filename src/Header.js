import React from 'react'
import './Header.css'
import Hero from './Components/Header/Hero'
import Navbar from './Components/Header/Navbar'
export default function Header() {
  return (
    <header>
        <Navbar/>
        <Hero/>
    </header>
  )
}
