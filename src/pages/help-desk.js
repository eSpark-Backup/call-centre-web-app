import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import {billingInquiries, escalationManagement, helpAboutHeading, helpAboutPara, helpAboutParaTwo, helpDeskHeading, helpDeskPara, helpInformationHeading, helpInformationHeadingTwo, helpInformationPara, helpInformationParaFour, helpInformationParaThree, helpInformationParaTwo, iTSolutions, ioTRelatedAssistance, logisticSupport, productInformation, serviceInformation, technicalSupport, technicalTroubleshooting, warrantySupport } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [productInformation, serviceInformation, technicalTroubleshooting, escalationManagement ];
const servicePoints = [iTSolutions, ioTRelatedAssistance, billingInquiries, logisticSupport, technicalSupport, warrantySupport ];

function HelpDesk() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Help Desk Call Center​"
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
                    <h2>{helpDeskHeading}</h2>
                  </div>
                  <p>{helpDeskPara}</p>
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
                    src="assets/img/inbound/help-desk/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <AboutSection heading={helpAboutHeading} aboutPara1={helpAboutPara} aboutUsPoints={aboutUsPoints} aboutPara2={helpAboutParaTwo} imagePath={"assets/img/inbound/help-desk/3.png"} />
      <Information heading={helpInformationHeading} informationPara={helpInformationPara} informationParaTwo={helpInformationParaTwo} imagePath={"assets/img/inbound/help-desk/4.png"} imagePath2={"assets/img/inbound/help-desk/2.png"} headingTwo={helpInformationHeadingTwo} informationParaThree={helpInformationParaThree} informationParaFour={helpInformationParaFour}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection /> 
    </Layout>
  );
}

export default  HelpDesk;
