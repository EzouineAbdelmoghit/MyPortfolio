import React from 'react'
import './About.css'
import Titre from '../Titre'
import image from '../../../src/WhatsApp Image 2023-03-23 at 12.22.52.jpeg'

export default function About() {
  return (
    <section className='About' id='About'>
        <Titre text="About_Me( )"/>
        <div className='About-container'>
            <div className='img-box'>
                <img src={image} alt=""/>
            </div>
            <div className='text-box'>
                <p>Hi and welcome to my portfolio! My name is Abdelmoghit , and I am a junior full-stack web developer passionate about creating clean, responsive and user-friendly web applications ,I enjoy tackling new challenges and solving problems creatively. I am proficient in HTML, CSS, JavaScript, React, Node.js and Laravel, and am always eager to learn more. Let's work together to build something great!</p>
                <div>
                <div className='info'>
                    <h3>1 <span>Year Of<br/> Experience</span></h3>
                </div>
                <div className='info'>
                    <h3>15 <span>Mini Project<br/> Completed</span></h3>
                </div>
                </div>
            </div>
        </div>

    </section>
  )
}
