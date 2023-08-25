import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import { About13_Heading, About13_para, About13_para2, Active_Chat, Automated_Response, Broadband_Devices, Broadband_Internet, Feedback_Survey_Tools, Human_Communication, Inbound_page6_Heading, Inbound_page6_para, Information9_Heading, Information9_Heading2, Information9_para, Information9_para2, Information9_para3, Information9_para4, Natural_Conversation, Online_Communication_System, Reporting_Dashboard, Timely_Response } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [Human_Communication, Active_Chat, Timely_Response, Broadband_Devices ];

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
                    <h2>{Inbound_page6_Heading}</h2>
                  </div>
                  <p>{Inbound_page6_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Natural_Conversation} ​​
                     </li>
                    <li>
                    <ListSvg />
                    {Automated_Response}​​
                      </li>
                    <li>
                    <ListSvg />
                    {Online_Communication_System}
                    </li>
                    <li>
                    <ListSvg />
                    {Reporting_Dashboard} ​​​​
                    </li>
                    <li>
                    <ListSvg />
                    {Broadband_Internet}​​
                    </li>
                    <li>
                    <ListSvg />
                    {Feedback_Survey_Tools}​​
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
                    src="assets/img/inbound/live-chat/4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <AboutSection heading={About13_Heading} aboutPara1={About13_para} aboutUsPoints={aboutUsPoints} aboutPara2={About13_para2} imagePath={"assets/img/inbound/live-chat/2.png"} />
      <Information heading={Information9_Heading} informationPara={Information9_para} informationParaTwo={Information9_para2} imagePath={"assets/img/inbound/live-chat/1.png"} imagePath2={"assets/img/inbound/live-chat/3.png"} headingTwo={Information9_Heading2} informationParaThree={Information9_para3} informationParaFour={Information9_para4}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection /> 
    </Layout>
  );
}

export default  LiveChat;
