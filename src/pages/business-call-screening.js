import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import AboutSection from "@/components/about/AboutSection";
import { ListSvg } from "@/components/svg/ListSvg";
import { About8_Heading, About8_para, About8_para2, Automated_Response, Automatic_Call_Distribution, Broadband_Phone_Service, CNAM, Caller_Identification, Customer_Data_Security, Effortless_Campaign, Inbound_page1_Heading, Inbound_page1_para, Information4_Heading, Information4_Heading2, Information4_para, Information4_para2, Information4_para3, Information4_para4, Interactive_Voice_Response, Rapid_Call_Transfer, Spam_Protection, VoIP } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";

const aboutUsPoints = [Spam_Protection, Customer_Data_Security, Rapid_Call_Transfer, Broadband_Phone_Service ];
function ServicePage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Business Call Screening​​"
        pageName="Inbound"
      />
      <div className="business-space">
<AboutSection heading={About8_Heading} aboutPara1={About8_para} aboutUsPoints={aboutUsPoints} aboutPara2={About8_para2} imagePath={"assets/img/inbound/business-call-screening/4.png"} />
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
                    <h2>{Inbound_page1_Heading}</h2>
                  </div>
                  <p>{Inbound_page1_para} </p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Caller_Identification}
                   </li>
                    <li>
                    <ListSvg />
                    {Automated_Response}</li>
                    <li>
                    <ListSvg />
                    {VoIP}
                    </li>
                    <li>
                    <ListSvg />
                    {Interactive_Voice_Response}
                    </li>
                    <li>
                    <ListSvg />
                    {Automatic_Call_Distribution}
                    </li>
                    <li>
                    <ListSvg />
                      {CNAM}
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
                    src="assets/img/inbound/business-call-screening/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  <Information heading={Information4_Heading} informationPara={Information4_para} informationParaTwo={Information4_para2} imagePath={"assets/img/inbound/business-call-screening/2.png"} imagePath2={"assets/img/inbound/business-call-screening/3.png"} headingTwo={Information4_Heading2} informationParaThree={Information4_para3} informationParaFour={Information4_para4}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection /> 
    </Layout>
  );
}

export default ServicePage;
