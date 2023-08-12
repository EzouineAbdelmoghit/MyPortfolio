import React, { useEffect } from 'react'
import './Card.css'
import './theme.css'
// import Aos from 'aos'
import 'aos/dist/aos.css';
import Aos from 'aos';
// import low from '../../Image/low-qlt-thumb.jpg'
export default function Card(props) {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  
  return (
  <>
    <div className="portfolio-list-item" data-aos={props.dataos}>
      <div className="pli-inner">
        <div className="pli-image-col">
          <a
            href={props.url}
            className="pli-image-link"
            data-cursor="View<br>Project"
          >
            <div className="pli-image-holder">
              <figure className="pli-image cover-opacity-2">
                <img className="anim-image-parallax tt-lazy" data-src="assets/img/portfolio/portfolio-1.jpg" src={props.link} alt=""/>
              </figure>
            </div>
            <div className="pli-info-col pli-info-inner">
              <div className="pli-info">
                <h2 className="pli-title">
                  {/* Victorian<br class="hide-from-sm" />
                  Girls */}
                  {props.titre}
                </h2>
                <div className="pli-categories-wrap">
                  <div className="pli-category">Project</div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="pli-info-col pli-info-outer">
          <div className="pli-info">
            <div className="pli-counter"></div>
            <h2 className="pli-title">
              <a href={props.url}
                >{props.titre}</a>
            </h2>
            <div className="pli-categories-wrap">
              <div className="pli-category">Project</div>
            </div>
          </div>
        </div>
      </div>
    </div>
              {/* <!-- <div class="pli-category">Varia</div> --> */}
  </>
  )
}
