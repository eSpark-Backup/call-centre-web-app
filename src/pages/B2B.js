import Breadcrumb from "@/components/common/Breadcrumb";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import React from "react";
import { ListSvg } from "@/components/svg/ListSvg";
import {
  activeManagement,
  affordableTelemarketingCampaigns,
  b2BAboutHeading,
  b2BAboutPara,
  b2BAboutParaTwo,
  b2BInformationHeading,
  b2BInformationHeadingTwo,
  b2BInformationPara,
  b2BInformationParaFour,
  b2BInformationParaThree,
  b2BInformationParaTwo,
  b2B_Heading,
  b2B_Para,
  callRecording,
  convincingProductPitches,
  customerRetentionCampaigns,
  invitingScripts,
  modernDialerExperts,
  positiveBrandMassage,
  profitGuaranteed,
  teleSales,
} from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [
  profitGuaranteed,
  modernDialerExperts,
  positiveBrandMassage,
  convincingProductPitches,
];
const servicePoints = [
  activeManagement,
  customerRetentionCampaigns,
  callRecording,
  invitingScripts,
  teleSales,
  affordableTelemarketingCampaigns,
];
function ServicePage() {
  return (
    <>
      <Breadcrumb
        pageList="Outbound"
        title="B2B Telemarketing​"
        pageName="Outbound"
      />
      <div className="service-details">
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
                    <h2>{b2B_Heading}</h2>
                  </div>
                  <p>{b2B_Para}</p>
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
                    src="assets/img/outbound/B2B/support.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSection
        heading={b2BAboutHeading}
        aboutPara1={b2BAboutPara}
        aboutUsPoints={aboutUsPoints}
        aboutPara2={b2BAboutParaTwo}
        imagePath={"assets/img/outbound/B2B/colleagues.jpg"}
      />
      <Information
        heading={b2BInformationHeading}
        informationPara={b2BInformationPara}
        informationParaTwo={b2BInformationParaTwo}
        imagePath={"assets/img/outbound/B2B/businesswoman.jpg"}
        imagePath2={"assets/img/outbound/B2B/people-working.jpg"}
        headingTwo={b2BInformationHeadingTwo}
        informationParaThree={b2BInformationParaThree}
        informationParaFour={b2BInformationParaFour}
      />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection />
    </>
  );
}

export default ServicePage;
