import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import { activeChat, automatedResponse, broadbandDevices, broadbandInternet, feedbackSurveyTools, humanCommunication, liveChatAboutHeading, liveChatAboutPara, liveChatAboutParaTwo, liveChatHeading, liveChatInformationHeading, liveChatInformationHeadingTwo, liveChatInformationPara, liveChatInformationParaFour, liveChatInformationParaThree, liveChatInformationParaTwo, liveChatPara, naturalConversation, onlineCommunicationSystem, reportingDashboard, timelyResponse } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [humanCommunication, activeChat, timelyResponse, broadbandDevices ];
const servicePoints = [naturalConversation, automatedResponse, onlineCommunicationSystem, reportingDashboard, broadbandInternet, feedbackSurveyTools ];

function LiveChat() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Live Chat Outsourcing​​"
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
                    <h2>{liveChatHeading}</h2>
                  </div>
                  <p>{liveChatPara}</p>
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
                    src="assets/img/inbound/live-chat/4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <AboutSection heading={liveChatAboutHeading} aboutPara1={liveChatAboutPara} aboutUsPoints={aboutUsPoints} aboutPara2={liveChatAboutParaTwo} imagePath={"assets/img/inbound/live-chat/2.png"} />
      <Information heading={liveChatInformationHeading} informationPara={liveChatInformationPara} informationParaTwo={liveChatInformationParaTwo} imagePath={"assets/img/inbound/live-chat/1.png"} imagePath2={"assets/img/inbound/live-chat/3.png"} headingTwo={liveChatInformationHeadingTwo} informationParaThree={liveChatInformationParaThree} informationParaFour={liveChatInformationParaFour}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection /> 
    </Layout>
  );
}

export default  LiveChat;
