import React, { useState } from 'react'
import { ListSvg } from '../svg/ListSvg'
import { About8_Heading, About8_para, About9_para2, Convincing_Product_Pitches, Friendly_Response, Inbound_Sales_Strategies, Positive_Brand_Massage } from '@/constants/Constants'
function About9() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="home5-about-area mb-130" id="home5-about-area">
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
                {Friendly_Response} ​​
              </li>
              <li>
              <ListSvg />
                {Inbound_Sales_Strategies}​
              </li>
              <li>
              <ListSvg />
                {Positive_Brand_Massage}​​
              </li>
              <li>
              <ListSvg />
               { Convincing_Product_Pitches}​
              </li>
            </ul>
            <p>{About9_para2} </p>
          </div>
        </div>
        <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="about-img-wrap">
            <div className="about-img magnetic-item">
              <img className="img-fluid" src="assets/img/inbound/customer-service/2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About9
