import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import {cTACampaigns, callAction, directAboutHeading, directAboutPara, directAboutParaTwo, directInformationHeading, directInformationHeadingTwo, directInformationPara, directInformationParaFour, directInformationParaThree, directInformationParaTwo, directLeads, directResponseAds, directResponseBroadcasting, directResponseHeading, directResponsePara, easyPerformanceTracking, effortlessCampaign, instantCallPickup, quickROI, searchAdvertising } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [directLeads, quickROI, easyPerformanceTracking, effortlessCampaign ];
const servicePoints = [directResponseAds, callAction, instantCallPickup, searchAdvertising, cTACampaigns, directResponseBroadcasting ];

function DirectResponse() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Direct Response Call Center​"
        pageName="Inbound"
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
                    <h2>{directResponseHeading}</h2>
                  </div>
                  <p>{directResponsePara}</p>
                  <ul className="about-featue">
                  {servicePoints.map((point, index) => (
                    <li key={index}>
                      <ListSvg />
                      {point}
                    </li>
                  ))}
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
                    src="assets/img/inbound/direct-response/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <AboutSection  heading={directAboutHeading} aboutPara1={directAboutPara} aboutUsPoints={aboutUsPoints} aboutPara2={directAboutParaTwo} imagePath={"assets/img/inbound/direct-response/3.png"} />
        <Information heading={directInformationHeading} informationPara={directInformationPara} informationParaTwo={directInformationParaTwo} imagePath={"assets/img/inbound/direct-response/2.png"} imagePath2={"assets/img/inbound/direct-response/4.png"} headingTwo={directInformationHeadingTwo} informationParaThree={directInformationParaThree} informationParaFour={directInformationParaFour}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection /> 
    </Layout>
  );
}

export default  DirectResponse;
