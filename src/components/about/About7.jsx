import React, { useState } from 'react'
import { ListSvg } from '../svg/ListSvg'
import { Landing_Pages, Lead_Capture, Lead_Magnets, Lead_Scoring } from '@/constants/Constants'
function About7() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="home5-about-area  mb-130" id="home5-about-area">
    <div className="container">
      <div className="row g-4 gy-5">
        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="about-content">
            <div className="section-title-5">
              <h2 style={{fontSize:"38px"}}>Open The Door of Daily Profitable Deals Through Our Lead Generation</h2>
            </div>
            <p> The gate towards successful profit-earning ventures is open for you and your business. Our team is here to foster the sales cycle of your business. Time to be opportunistic and collaborate with us. Companies earn profits on a daily basis when they figure out their targeted customers and employ experienced lead-generation customer support teams. This is your chance to collab and grow faster by earning daily profits.</p>
            <ul className="about-featue">
              <li>
              <ListSvg />
                {Lead_Capture}
             </li>
              <li>
              <ListSvg />
                {Landing_Pages}
             </li>
              <li>
              <ListSvg />
                {Lead_Magnets} 
             </li>
              <li>
              <ListSvg />
                {Lead_Scoring}
              </li>
            </ul>
            <p>Boosting sales is an essential requirement of lead generation services. We make sure to be available all day to grab more customers and generate hot leads. Our platform of expert customer support representatives is ready to collaborate and help companies earn profitable leads.</p>
          </div>
        </div>
        <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="about-img-wrap">
            <div className="about-img magnetic-item">
              <img className="img-fluid" src="assets/img/outbound/lead-generation/good-news.jpg" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default About7
