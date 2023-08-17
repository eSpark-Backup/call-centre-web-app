import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Partner5 from "@/components/partner/Partner5";
import About5 from "@/components/about/About5";
import Home3Contact from "@/components/contact/Home3Contact";
import OurWork from "@/components/work/OurWork";
import Information1 from "@/components/details/Information1";
import Link from "next/link";
import React from "react";
import { ListSvg } from "@/components/svg/ListSvg";
import { Active_Management, Affordable_Telemarketing_Campaigns, Call_Recording, Customer_Retention_Campaigns, Inviting_Scripts, Tele_Sales } from "@/constants/Constants";

function ServicePage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Outbound"
        title="B2B Telemarketing​"
        pageName="Outbound"
      />
      <div className="service-details ">
        <div className="about-services sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-6 d-flex align-items-center wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="about-content">
                  <div className="section-title-5">
                    <h2>How Do We Spread Network Through B2B Telemarketing?</h2>
                  </div>
                  <p>
                  Our team builds convincing conversations to market the offered services or products of our clients. With the updated features of B2B telemarketing, we ensure the running of successful campaigns involving welcoming regards, product info, and sales speech. Today’s market demands various services, and our platform is packed with customer-grabbing strategies and tools.​
                  </p>
                  <ul className="about-featue">
                    <li>
                      <ListSvg />
                  {Active_Management}
                   </li>
                    <li>
                    <ListSvg />
                    {Customer_Retention_Campaigns}
                    </li>
                    <li>
                    <ListSvg />
                      {Call_Recording}
                    </li>
                    <li>
                    <ListSvg />
                      {Inviting_Scripts}
                    </li>
                    <li>
                    <ListSvg />
                      {Tele_Sales}
                    </li>
                    <li>
                    <ListSvg />
                      {Affordable_Telemarketing_Campaigns}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 wow animate fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="service-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/outbound/B2B/support.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <About5 />
  <Information1 />
      <OurWork />
      <Partner5 />
      <Home3Contact />
    </Layout>
  );
}

export default ServicePage;
