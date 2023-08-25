import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import {About12_Heading, About12_para, About12_para2, Billing_inquiries, Escalation_Management, IT_Solutions, Inbound_page5_Heading, Inbound_page5_para, Information8_Heading, Information8_Heading2, Information8_para, Information8_para2, Information8_para3, Information8_para4, IoT_Related_Assistance, Logistic_Support, Product_Information, Service_Information, Technical_Support, Technical_Troubleshooting, Warranty_Support } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [Product_Information, Service_Information, Technical_Troubleshooting, Escalation_Management ];

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
                    <h2>{Inbound_page5_Heading}</h2>
                  </div>
                  <p>{Inbound_page5_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {IT_Solutions} ​
                     </li>
                    <li>
                    <ListSvg />
                    {IoT_Related_Assistance}​
                      </li>
                    <li>
                    <ListSvg />
                    {Billing_inquiries}
                    </li>
                    <li>
                    <ListSvg />
                    {Logistic_Support}​​​
                    </li>
                    <li>
                    <ListSvg />
                    {Technical_Support} ​
                    </li>
                    <li>
                    <ListSvg />
                    {Warranty_Support}​
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
                    src="assets/img/inbound/help-desk/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <AboutSection heading={About12_Heading} aboutPara1={About12_para} aboutUsPoints={aboutUsPoints} aboutPara2={About12_para2} imagePath={"assets/img/inbound/help-desk/3.png"} />
      <Information heading={Information8_Heading} informationPara={Information8_para} informationParaTwo={Information8_para2} imagePath={"assets/img/inbound/help-desk/4.png"} imagePath2={"assets/img/inbound/help-desk/2.png"} headingTwo={Information8_Heading2} informationParaThree={Information8_para3} informationParaFour={Information8_para4}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection /> 
    </Layout>
  );
}

export default  HelpDesk;
