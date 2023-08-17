import React, { useState } from 'react'
import { ListSvg } from '../svg/ListSvg'
import { Convincing_Product_Pitches, Modern_Dialer_Experts, Positive_Brand_Massage, Profit_Guaranteed } from '@/constants/Constants'
function About5() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="home5-about-area  mb-130" id="home5-about-area">
    <div className="container">
      <div className="row g-4 gy-5">
        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="about-content">
            <div className="section-title-5">
              <h2> Earn Daily Sales Opportunities With Our B2B Telemarketing.</h2>
            </div>
            <p>It just takes one single moment for the potential customers to be impressed by the offered products and other beneficial services. We don’t miss out on any opportunity to stimulate our respected target clients. We employ the telemarketing service to promote the brand message and pitch the products and services of our clients</p>
            <ul className="about-featue">
              <li>
              <ListSvg />
                {Profit_Guaranteed} 
             </li>
              <li>
              <ListSvg />
                {Modern_Dialer_Experts}
             </li>
              <li>
              <ListSvg />
                {Positive_Brand_Massage} 
             </li>
              <li>
              <ListSvg />
                {Convincing_Product_Pitches}
              </li>
            </ul>
            <p>A brand needs an experienced telemarketing team to reach out to more targeted customers. Our professionals know that it is not all about sales in telemarketing. They take liability for the market of companies and their intended message.  ​</p>
          </div>
        </div>
        <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="about-img-wrap">
            <div className="about-img magnetic-item">
              <img className="img-fluid" src="assets/img/outbound/B2B/colleagues.jpg" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default About5
