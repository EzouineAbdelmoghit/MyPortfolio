import React from 'react'
import About from './Components/About/About'
import Proj from './Components//Project/Proj'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import './Main.css'

export default function Main() {
  return (
    <main>
        <About/>
        <Proj/>
        <Skills/>
        <Contact/>
    </main>
  )
}
