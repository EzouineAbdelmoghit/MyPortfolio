import React from 'react'
import Titre from '../Titre'
import Progressbar from './Progressbar'
import './Skills.css'
import Circle from './Circle'
export default function Skills() {
    let tab=[
        {   id:4,
            name:"Front-end",
            percentage:"85%"
        },
        {   id:5,
            name:"Back-end",
            percentage:"25%"
        }
    ]
    let skills2=[
        {   id:6,
            name:"PHP",
            percentage:"30"
        },
        {   id:7,
            name:"Laravel",
            percentage:"20"
        },
        {   id:8,
            name:"MySql",
            percentage:"40"
        }

    ]
    let skills=[
        {   id:9,
            name:"HTML",
            percentage:"85"
        },
        {   id:10,
            name:"CSS",
            percentage:"85"
        },
        {   id:11,
            name:"JS",
            percentage:"70"
        },
        {   id:12,
            name:"React",
            percentage:"45"
        },
        {   id:13,
            name:"Bootstrap",
            percentage:"65"
        },
        {   id:14,
            name:"Tailwind",
            percentage:"50"
        }

    ]

    let tab2=tab.map((e)=>{
        return(
            <div className='skill'>
                <Progressbar key={e.id} text={e.name} percentage={e.percentage}/>
                {e.name==="Front-end"?<a href="#menu">Details</a>:<a href="#menu1">Details</a>}
                
            </div>
        )})
  return (
    <section id='Skill'>
        <Titre text="<Skills/>"/>
        <div className='skills-box' id="Skills">
            {tab2}
            <div className="popover" id="menu">
                <div className='content'>
                    <a href="#Skills" class="close"> </a>
                        <h2>Front-end skills</h2>
                    <div className='Box'>
                        {
                            skills.map(e=>{return <Circle key={e.id} text={e.name} percentage={e.percentage}/>})
                        }
                    </div>
                </div>
            </div>
            <div className="popover" id="menu1">
                <div className = 'content'>
                    <a href="#Skills" className="close"> </a>
                        <h2>Back-end skills</h2>
                    <div className='Box'>
                        {
                            skills2.map(e=>{return <Circle key={e.id} text={e.name} percentage={e.percentage}/>})
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className='Slider'>
        <div className="Logo-cont ">
            <div className="logo-slider">
            {
                skills.map(e=>{return <div className="items"><Circle key={e.id} text={e.name} percentage={e.percentage}/></div> })
            }
            {
                skills2.map(e=>{return <div className="items"><Circle key={e.id} text={e.name} percentage={e.percentage}/></div> })
            }
                
            </div>
        </div>
        </div>
    </section>
  )
}
