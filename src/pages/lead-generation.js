import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import React from "react";
import { ListSvg } from "@/components/svg/ListSvg";
import { About7_Heading, About7_Para, About7_Para2, Audience_Segmentation, Brand_Awareness, High_Quality_Leads, Information3_Heading, Information3_Heading2, Information3_Para, Information3_Para2, Information3_Para3, Information3_Para4, Landing_Pages, Lead_Capture, Lead_Generation_Strategies, Lead_Heading, Lead_Lifecycle, Lead_Magnets, Lead_Nurturing, Lead_Para, Lead_Scoring } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [Lead_Capture, Landing_Pages, Lead_Magnets, Lead_Scoring ];

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
                    <h2>{Lead_Heading}</h2>
                  </div>
                  <p>{Lead_Para}</p>
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
        <AboutSection heading={About7_Heading} aboutPara1={About7_Para} aboutUsPoints={aboutUsPoints} aboutPara2={About7_Para2} imagePath={"assets/img/outbound/lead-generation/good-news.jpg"} />
        <Information heading={Information3_Heading} informationPara={Information3_Para} informationParaTwo={Information3_Para2} imagePath={"assets/img/outbound/lead-generation/computer-lab.jpg"} imagePath2={"assets/img/outbound/lead-generation/focused-team-leader.jpg"} headingTwo={Information3_Heading2} informationParaThree={Information3_Para3} informationParaFour={Information3_Para4}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection />
    </Layout>
  );
}

export default LeadGeneration;
