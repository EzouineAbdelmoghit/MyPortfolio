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
    <div class="portfolio-list-item" data-aos={props.dataos}>
      <div class="pli-inner">
        <div class="pli-image-col">
          <a
            href={props.url}
            class="pli-image-link"
            data-cursor="View<br>Project"
          >
            <div class="pli-image-holder">
              <figure class="pli-image cover-opacity-2">
                <img className="anim-image-parallax tt-lazy" data-src="assets/img/portfolio/portfolio-1.jpg" src={props.link} alt=""/>
              </figure>
            </div>
            <div class="pli-info-col pli-info-inner">
              <div class="pli-info">
                <h2 class="pli-title">
                  {/* Victorian<br class="hide-from-sm" />
                  Girls */}
                  {props.titre}
                </h2>
                <div class="pli-categories-wrap">
                  <div class="pli-category">Project</div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="pli-info-col pli-info-outer">
          <div class="pli-info">
            <div class="pli-counter"></div>
            <h2 class="pli-title">
              <a href={props.url}
                >{props.titre}</a>
            </h2>
            <div class="pli-categories-wrap">
              <div class="pli-category">Project</div>
            </div>
          </div>
        </div>
      </div>
    </div>
              {/* <!-- <div class="pli-category">Varia</div> --> */}
  </>
  )
}
