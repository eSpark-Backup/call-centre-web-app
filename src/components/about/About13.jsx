import React, { useState } from 'react'
import { ListSvg } from '../svg/ListSvg'
import { About13_Heading, About13_para, About13_para13, About13_para2, Active_Chat, Broadband_Devices, Human_Communication, Timely_Response } from '@/constants/Constants'
function About13() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="home5-about-area mb-130" id="home5-about-area">
    <div className="container">
      <div className="row g-4 gy-5">
        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="about-content">
            <div className="section-title-5">
              <h2 style={{fontSize:"40px"}}>{About13_Heading}</h2>
            </div>
            <p>{About13_para}</p>
            <ul className="about-featue">
              <li>
              <ListSvg />
              {Human_Communication}
              </li>
              <li>
              <ListSvg />
              {Active_Chat}
              </li>
              <li>
              <ListSvg />
                {Timely_Response} ​
              </li>
              <li>
              <ListSvg />
              {Broadband_Devices}​
              </li>
            </ul>
            <p>{About13_para2}</p>
          </div>
        </div>
        <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="about-img-wrap">
            <div className="about-img magnetic-item">
              <img className="img-fluid" src="assets/img/inbound/live-chat/2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About13
