import React from 'react'
import './Progressbar.css'

export default function Progressbar(props) {
  return (
    <>
        <h2>{props.text}</h2>
        <div className='ProgressBar' style={{"--width":`${props.percentage}`}}>
            <div><span>{props.percentage}</span></div>
        </div>
    </>
  )
}
