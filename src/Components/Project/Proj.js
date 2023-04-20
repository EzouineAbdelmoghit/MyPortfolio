import React from 'react'
import Titre from '../Titre'
import Card from './Card'
import './Proj.css'
import photo from '../../Image/library.jpg'
import photo1 from '../../Image/CV.webp'
import photo2 from '../../Image/calc.jpg'

export default function Proj() {
  let tab=[
    {
      id:1,
      titre:"Library",
      link:photo,
      url:"https://github.com/EzouineAbdelmoghit/BookList",
      dataos:"fade-right"
    },
    {
      id:2,
      titre:"My CV",
      link:photo1,
      url:"https://ezouineabdelmoghit.github.io/CV_V1/",
      dataos:"fade-left"

    },
    {
      id:3,
      titre:"Calculator",
      link:photo2,
      url:"https://ezouineabdelmoghit.github.io/Calculatrice/",
      dataos:"fade-right",
    }
  ]
  return (
    <section>
        <Titre text="<Project/>"/>
        <div id="scroll-container">
          <div id="content-wrap">
            <div id="page-content">
              <div id="sdc-target" class="tt-section padding-bottom-150">
                    <div class="tt-section-inner">
                    </div>
                    <div
                      class="portfolio-list pli-cropped pli-info-xlg pl-alter pli-info-overlay pli-title-stroke pli-hover"
                    >
                          {
                  tab.map(e=>{
                    return <Card key={e.id} dataos={e.dataos} titre={e.titre} link={e.link} url={e.url}/>

                  })
                }
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
