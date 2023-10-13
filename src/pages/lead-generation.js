import Breadcrumb from "@/components/common/Breadcrumb";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import React from "react";
import { ListSvg } from "@/components/svg/ListSvg";
import {
  audienceSegmentation,
  brandAwareness,
  highQualityLeads,
  landingPages,
  leadAboutHeading,
  leadAboutPara,
  leadAboutParaTwo,
  leadCapture,
  leadGenerationStrategies,
  leadHeading,
  leadInformationHeading,
  leadInformationHeadingTwo,
  leadInformationPara,
  leadInformationParaFour,
  leadInformationParaThree,
  leadInformationParaTwo,
  leadLifecycle,
  leadMagnets,
  leadNurturing,
  leadPara,
  leadScoring,
} from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [leadCapture, landingPages, leadMagnets, leadScoring];
const servicePoints = [
  brandAwareness,
  highQualityLeads,
  leadGenerationStrategies,
  audienceSegmentation,
  leadNurturing,
  leadLifecycle,
];

function LeadGeneration() {
  return (
    <>
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
                    <h2>{leadHeading}</h2>
                  </div>
                  <p>{leadPara}</p>
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
                    src="assets/img/outbound/lead-generation/digital-device.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSection
        heading={leadAboutHeading}
        aboutPara1={leadAboutPara}
        aboutUsPoints={aboutUsPoints}
        aboutPara2={leadAboutParaTwo}
        imagePath={"assets/img/outbound/lead-generation/good-news.jpg"}
      />
      <Information
        heading={leadInformationHeading}
        informationPara={leadInformationPara}
        informationParaTwo={leadInformationParaTwo}
        imagePath={"assets/img/outbound/lead-generation/computer-lab.jpg"}
        imagePath2={
          "assets/img/outbound/lead-generation/focused-team-leader.jpg"
        }
        headingTwo={leadInformationHeadingTwo}
        informationParaThree={leadInformationParaThree}
        informationParaFour={leadInformationParaFour}
      />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection />
    </>
  );
}

export default LeadGeneration;
