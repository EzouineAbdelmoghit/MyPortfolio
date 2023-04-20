import React from 'react'
import Titre from '../Titre'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
    <div className="contact-container">
        <Titre text="Contact"/>
      <h4>
        I'm always open to discussing product
        <span>design work or partnerships.</span>
      </h4>
      <p>Please Fill Required Fields</p>
      <form action="">
        <div className="input-box">
          <input type="text" id="name" />
          <label htmlFor="name">Name *</label>
        </div>
        <div className="input-box">
          <input type="email" id="mail" />
          <label htmlFor="mail">Email *</label>
        </div>
        <div className="input-box">
          <input type="text" id="msg" />
          <label htmlFor="msg">Message *</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </section>
  )
}
