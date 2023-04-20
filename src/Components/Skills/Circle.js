import React from 'react'
import './Circle.css'
export default function Circle(props) {
  return (
    <div className="skill-container">
        <div className="card">
            <div className="percent" style={{"--clr": "#d881ff" ,"--num": `${props.percentage}`}}>
            <div className="dot"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
                <h2>{props.percentage}<span>%</span></h2>
                <p>{props.text}</p>
            </div>
            </div>
        </div>
    </div>
  )
}
