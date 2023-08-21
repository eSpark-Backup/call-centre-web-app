import React, { useState } from 'react'
import { ListSvg } from '../svg/ListSvg'
import { About8_Heading, About8_para, About8_para2, Broadband_Phone_Service, Customer_Data_Security, Rapid_Call_Transfer, Spam_Protection } from '@/constants/Constants'
function About8() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="home5-about-area pt-130 mb-130" id="home5-about-area">
    <div className="container">
      <div className="row g-4 gy-5">
        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="about-content">
            <div className="section-title-5">
              <h2 style={{fontSize:"40px"}}>{About8_Heading}​</h2>
            </div>
            <p>{About8_para}</p>
            <ul className="about-featue">
              <li>
              <ListSvg />
              {Spam_Protection}
              </li>
              <li>
              <ListSvg />
                {Customer_Data_Security}
              </li>
              <li>
              <ListSvg />
                {Rapid_Call_Transfer}
              </li>
              <li>
              <ListSvg />
                {Broadband_Phone_Service}
              </li>
            </ul>
            <p>{About8_para2} </p>
          </div>
        </div>
        <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="about-img-wrap">
            <div className="about-img magnetic-item">
              <img className="img-fluid" src="assets/img/inbound/business-call-screening/4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About8
