import React from 'react'
import './Titre.css'

export default function Titre(props) {
  return (
    <div className="section-title">
            <span>{props.text}</span>
            <h2>{props.text}</h2>
            <p>
            Sit sint consectetur velit quisquam cupiditate impedit suscipit
            alias
            </p>
    </div>
  )
}
