import Breadcrumb from "@/components/common/Breadcrumb";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import {
  businessEventRegistrations,
  conferenceRegistration,
  easyProcess,
  eventAboutHeading,
  eventAboutPara,
  eventAboutParatwo,
  eventAttendeesGuide,
  eventInformationHeading,
  eventInformationHeadingTwo,
  eventInformationPara,
  eventInformationParaFour,
  eventInformationParaThree,
  eventInformationParaTwo,
  eventMarketing,
  eventRegistrationHeading,
  eventRegistrationPara,
  festivalRegistrations,
  livePhoneSupport,
  seminarRegistration,
  tradeShowsRegistrations,
  webinarRegistration,
} from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [
  easyProcess,
  livePhoneSupport,
  eventMarketing,
  eventAttendeesGuide,
];
const servicePoints = [
  seminarRegistration,
  conferenceRegistration,
  webinarRegistration,
  businessEventRegistrations,
  tradeShowsRegistrations,
  festivalRegistrations,
];

function EventRegistration() {
  return (
    <>
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
                    <h2>{eventRegistrationHeading}</h2>
                  </div>
                  <p>{eventRegistrationPara}</p>
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
                    src="assets/img/inbound/event-registration/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSection
        heading={eventAboutHeading}
        aboutPara1={eventAboutPara}
        aboutUsPoints={aboutUsPoints}
        aboutPara2={eventAboutParatwo}
        imagePath={"assets/img/inbound/event-registration/2.jpg"}
      />
      <Information
        heading={eventInformationHeading}
        informationPara={eventInformationPara}
        informationParaTwo={eventInformationParaTwo}
        imagePath={"assets/img/inbound/event-registration/3.png"}
        imagePath2={"assets/img/inbound/event-registration/4.jpg"}
        headingTwo={eventInformationHeadingTwo}
        informationParaThree={eventInformationParaThree}
        informationParaFour={eventInformationParaFour}
      />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection />
    </>
  );
}

export default EventRegistration;
