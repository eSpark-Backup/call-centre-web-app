import React, { useState } from 'react'
import { ListSvg } from '../svg/ListSvg'
import { About12_Heading, About12_para, About12_para2, Escalation_Management, Product_Information, Service_Information, Technical_Troubleshooting } from '@/constants/Constants'
function About12() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="home5-about-area mb-130" id="home5-about-area">
    <div className="container">
      <div className="row g-4 gy-5">
        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="about-content">
            <div className="section-title-5">
              <h2 style={{fontSize:"40px"}}>{About12_Heading}​</h2>
            </div>
            <p>{About12_para}</p>
            <ul className="about-featue">
              <li>
              <ListSvg />
                {Product_Information} ​
              </li>
              <li>
              <ListSvg />
              {Service_Information}​​​
              </li>
              <li>
              <ListSvg />
              {Technical_Troubleshooting}​
              </li>
              <li>
              <ListSvg />
              {Escalation_Management}​
              </li>
            </ul>
            <p>{About12_para2}</p>
          </div>
        </div>
        <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="about-img-wrap">
            <div className="about-img magnetic-item">
              <img className="img-fluid" src="assets/img/inbound/help-desk/3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About12
