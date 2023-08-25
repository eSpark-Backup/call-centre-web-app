import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import { About11_Heading, About11_para, About11_para2, Business_Event_Registrations, Conference_Registration, Easy_process, Event_Attendees_Guide, Event_Marketing, Festival_Registrations, Inbound_page4_Heading, Inbound_page4_para, Information7_Heading, Information7_Heading2, Information7_para, Information7_para2, Information7_para3, Information7_para4, Live_Phone_Support, Seminar_Registration, Trade_Shows_Registrations, Webinar_Registration } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [Easy_process, Live_Phone_Support, Event_Marketing, Event_Attendees_Guide ];

function EventRegistration() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Event Registration​​"
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
                    <h2>{Inbound_page4_Heading}</h2>
                  </div>
                  <p>{Inbound_page4_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Seminar_Registration} ​
                     </li>
                    <li>
                    <ListSvg />
                    {Conference_Registration} ​
                      </li>
                    <li>
                    <ListSvg />
                    {Webinar_Registration}
                    </li>
                    <li>
                    <ListSvg />
                    {Business_Event_Registrations}
                    </li>
                    <li>
                    <ListSvg />
                    {Trade_Shows_Registrations}
                    </li>
                    <li>
                    <ListSvg />
                    {Festival_Registrations}
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
                    src="assets/img/inbound/event-registration/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <AboutSection heading={About11_Heading} aboutPara1={About11_para} aboutUsPoints={aboutUsPoints} aboutPara2={About11_para2} imagePath={"assets/img/inbound/event-registration/2.jpg"} />
        <Information heading={Information7_Heading} informationPara={Information7_para} informationParaTwo={Information7_para2} imagePath={"assets/img/inbound/event-registration/3.png"} imagePath2={"assets/img/inbound/event-registration/4.jpg"} headingTwo={Information7_Heading2} informationParaThree={Information7_para3} informationParaFour={Information7_para4}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection /> 
    </Layout>
  );
}

export default  EventRegistration;
