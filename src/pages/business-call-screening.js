import Breadcrumb from "@/components/common/Breadcrumb";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import AboutSection from "@/components/about/AboutSection";
import { ListSvg } from "@/components/svg/ListSvg";
import {
  CNAM,
  VoIP,
  automatedResponse,
  automaticCallDistribution,
  broadbandPhoneService,
  businessAboutHeading,
  businessAboutPara,
  businessAboutParaTwo,
  businessHeading,
  businessInformationHeading,
  businessInformationHeadingTwo,
  businessInformationPara,
  businessInformationParaFour,
  businessInformationParaThree,
  businessInformationParaTwo,
  businessPara,
  callerIdentification,
  customerDataSecurity,
  interactiveVoiceResponse,
  rapidCallTransfer,
  spamProtection,
} from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";

const aboutUsPoints = [
  spamProtection,
  customerDataSecurity,
  rapidCallTransfer,
  broadbandPhoneService,
];
const servicePoints = [
  callerIdentification,
  automatedResponse,
  VoIP,
  interactiveVoiceResponse,
  automaticCallDistribution,
  CNAM,
];
function BusinessCall() {
  return (
    <>
      <Breadcrumb
        pageList="Inbound"
        title="Business Call Screening​​"
        pageName="Inbound"
      />
      <div className="business-space">
        <AboutSection
          heading={businessAboutHeading}
          aboutPara1={businessAboutPara}
          aboutUsPoints={aboutUsPoints}
          aboutPara2={businessAboutParaTwo}
          imagePath={"assets/img/inbound/business-call-screening/4.png"}
        />
      </div>
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
                    <h2>{businessHeading}</h2>
                  </div>
                  <p>{businessPara} </p>
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
                    src="assets/img/inbound/business-call-screening/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Information
        heading={businessInformationHeading}
        informationPara={businessInformationPara}
        informationParaTwo={businessInformationParaTwo}
        imagePath={"assets/img/inbound/business-call-screening/2.png"}
        imagePath2={"assets/img/inbound/business-call-screening/3.png"}
        headingTwo={businessInformationHeadingTwo}
        informationParaThree={businessInformationParaThree}
        informationParaFour={businessInformationParaFour}
      />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection />
    </>
  );
}

export default BusinessCall;
