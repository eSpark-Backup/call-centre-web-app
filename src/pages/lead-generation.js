import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Partner5 from "@/components/partner/Partner5";
import About7 from "@/components/about/About7";
import Home3Contact from "@/components/contact/Home3Contact";
import OurWork from "@/components/work/OurWork";
import Link from "next/link";
import React from "react";
import { ListSvg } from "@/components/svg/ListSvg";
import { Audience_Segmentation, Brand_Awareness, High_Quality_Leads, Lead_Generation_Strategies, Lead_Lifecycle, Lead_Nurturing } from "@/constants/Constants";

function LeadGeneration() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Outbound"
        title="Lead Generation"
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
                    <h2>Let’s Reach Out to Your Company’s Potential Customers Through Our Lead Generation Services.</h2>
                  </div>
                  <p>
                  Newly established privately owned companies need instant leads to expand their network and be stable in the market. The rapid flow of leads creates a colossal impact on the growth of agencies. That is the reason the demand for our offered service of lead generation is increasing every passing day. We employ modern techniques to reach out to potential customers and promote products and services.
                  </p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                      {Brand_Awareness}
                   </li>
                    <li>
                    <ListSvg />
                      {High_Quality_Leads}
                    </li>
                    <li>
                    <ListSvg />
                      {Lead_Generation_Strategies}
                    </li>
                    <li>
                    <ListSvg />
                      {Audience_Segmentation}
                    </li>
                    <li>
                    <ListSvg />
                      {Lead_Nurturing}
                    </li>
                    <li>
                    <ListSvg />
                      {Lead_Lifecycle}
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
                    src="assets/img/outbound/lead-generation/digital-device.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <About7 />
      <OurWork />
      <Partner5 />
      <Home3Contact />
    </Layout>
  );
}

export default LeadGeneration;
