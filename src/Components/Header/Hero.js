import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero">
            <div className="hero-container">
                {/* <h2>I am</h2>
                <h1>Ezouine Abdelmoghit</h1>
                <h2>A Full-Stack Web developer</h2> */}
                <div className="content Animation">
                    <div id="fly-in">
                        <div>Welcome<span></span></div>
                        <div><span>I'm</span>Abdelmoghit<span>Ezouine</span></div>
                        <div>A Junior<span>Full-stack Developper</span></div>
                    </div>
                </div> 
                {/* <a href="#About" className="btn-scroll scrollto" title="Scroll Down">
                    <i className="fa-solid fa-chevron-down"></i>
                </a> */}
            </div>
    </section>
  )
}
