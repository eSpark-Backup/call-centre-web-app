import Breadcrumb from "@/components/common/Breadcrumb";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import {
  cRMSystem,
  convincingProductPitches,
  customerAboutHeading,
  customerAboutPara,
  customerAboutParaTwo,
  customerInformationHeading,
  customerInformationHeadingTwo,
  customerInformationPara,
  customerInformationParaFour,
  customerInformationParaThree,
  customerInformationParaTwo,
  customerServiceHeading,
  customerServicePara,
  friendlyResponse,
  inboundCallTracking,
  inboundDialing,
  inboundLeads,
  inboundSalesStrategies,
  liveChatSoftware,
  positiveBrandMassage,
  trainedAgents,
} from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [
  friendlyResponse,
  inboundSalesStrategies,
  positiveBrandMassage,
  convincingProductPitches,
];
const servicePoints = [
  trainedAgents,
  cRMSystem,
  liveChatSoftware,
  inboundDialing,
  inboundCallTracking,
  inboundLeads,
];

function CustomerService() {
  return (
    <>
      <Breadcrumb
        pageList="Inbound"
        title=" Customer Service​​"
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
                    <h2>{customerServiceHeading}​</h2>
                  </div>
                  <p>{customerServicePara}</p>
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
                    src="assets/img/inbound/customer-service/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSection
        heading={customerAboutHeading}
        aboutPara1={customerAboutPara}
        aboutUsPoints={aboutUsPoints}
        aboutPara2={customerAboutParaTwo}
        imagePath={"assets/img/inbound/customer-service/2.png"}
      />
      <Information
        heading={customerInformationHeading}
        informationPara={customerInformationPara}
        informationParaTwo={customerInformationParaTwo}
        imagePath={"assets/img/inbound/customer-service/3.png"}
        imagePath2={"assets/img/inbound/customer-service/4.png"}
        headingTwo={customerInformationHeadingTwo}
        informationParaThree={customerInformationParaThree}
        informationParaFour={customerInformationParaFour}
      />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection />
    </>
  );
}

export default CustomerService;
