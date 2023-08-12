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
            percentage:"75%"
        }
    ]
    let skills2=[
        {   id:6,
            name:"PHP",
            percentage:"70"
        },
        {   id:7,
            name:"Laravel",
            percentage:"75"
        },
        {   id:8,
            name:"MySql",
            percentage:"70"
        }

    ]
    let skills=[
        {   id:9,
            name:"HTML",
            percentage:"90"
        },
        {   id:10,
            name:"CSS",
            percentage:"90"
        },
        {   id:11,
            name:"JS",
            percentage:"85"
        },
        {   id:12,
            name:"React",
            percentage:"70"
        },
        {   id:13,
            name:"Bootstrap",
            percentage:"80"
        },
        {   id:14,
            name:"Tailwind",
            percentage:"80"
        }

    ]

    let tab2=tab.map((e,index)=>{
        return(
            <div className='skill' key={`prog-${index}`}>
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
                    <a href="#Skills" className="close"> </a>
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
                skills.map((e,index)=>{return <div className="items" key={`unique-i-${index}`}><Circle key={`unique-${e.id}`} text={e.name} percentage={e.percentage}/></div> })
            }
            {
                skills2.map((e,index)=>{return <div className="items" key={`unique-a-${index}`}><Circle key={`unique-a-${e.id}`} text={e.name} percentage={e.percentage}/></div> })
            }
                
            </div>
        </div>
        </div>
    </section>
  )
}
