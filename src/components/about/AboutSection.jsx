import React, { useState } from 'react'
import { ListSvg } from '../svg/ListSvg'

function AboutSection({heading,aboutPara1,aboutUsPoints,aboutPara2,imagePath}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="home5-about-area  mb-130" id="home5-about-area">
    <div className="container">
      <div className="row g-4 gy-5">
        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="about-content">
            <div className="section-title-5">
              <h2 style={{fontSize:"40px"}}>{heading}</h2>
            </div>
            <p>{aboutPara1}</p>
            <ul className="about-featue">
            {aboutUsPoints.map((item, index)=>(
              <li key={index}>
              <ListSvg />
                {item}  
              </li>
))}
            </ul>
            <p>{aboutPara2}</p>
          </div>
        </div>
        <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="about-img-wrap">
            <div className="about-img magnetic-item">
              <img className="img-fluid" src={imagePath} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutSection;



