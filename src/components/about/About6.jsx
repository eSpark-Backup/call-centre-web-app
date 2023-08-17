import React, { useState } from 'react'
import { ListSvg } from '../svg/ListSvg'
import { B2B_Campaigns, Customer_Retention, Discount_Offers, Rejoining_Rewards } from '@/constants/Constants'
function About6() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="home5-about-area  mb-130" id="home5-about-area">
    <div className="container">
      <div className="row g-4 gy-5">
        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="about-content">
            <div className="section-title-5">
              <h2 style={{fontSize:"40px"}}>Manage Strong Connections With Your Old Consumers Through Our Customer Winback Service.</h2>
            </div>
            <p> Let’s join hands and help your small business grow. It is up to you to select the best customer winback service deal. Our certified team has been associated with some of the giants in this market. They are running telemarketing, lead generation, and customer winback campaigns for multinational profitable companies.</p>
            <ul className="about-featue">
              <li>
              <ListSvg />
                {Customer_Retention}
             </li>
              <li>
              <ListSvg />
                {B2B_Campaigns}
             </li>
              <li>
              <ListSvg />
                {Discount_Offers} 
             </li>
              <li>
              <ListSvg />
                {Rejoining_Rewards}
              </li>
            </ul>
            <p>Fresh business companies need a perfect start. A friendly connection with us opens the doors of worthwhile growth opportunities. Through our retention campaigns, we associate companies with their old and lost customers that spread positive word-of-mouth for our client businesses.</p>
          </div>
        </div>
        <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="about-img-wrap">
            <div className="about-img magnetic-item">
              <img className="img-fluid" src="assets/img/outbound/customer-winback/making-deal.jpg" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default About6
