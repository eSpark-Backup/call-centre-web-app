import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import { About9_Heading, About9_para, About9_para2, CRM_System, Convincing_Product_Pitches, Friendly_Response, Inbound_Call_Tracking, Inbound_Dialing, Inbound_Leads, Inbound_Sales_Strategies, Inbound_page2_Heading, Inbound_page2_para, Information5_Heading, Information5_Heading2, Information5_para, Information5_para2, Information5_para3, Information5_para4, Live_Chat_Software, Positive_Brand_Massage, Trained_Agents } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";


const aboutUsPoints = [Friendly_Response, Inbound_Sales_Strategies, Positive_Brand_Massage, Convincing_Product_Pitches ];

function CustomerService() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title=" Customer Service​​"
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
                    <h2>{Inbound_page2_Heading}​</h2>
                  </div>
                  <p>{Inbound_page2_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Trained_Agents}
                   </li>
                    <li>
                    <ListSvg />
                    {CRM_System}</li>
                    <li>
                    <ListSvg />
                    {Live_Chat_Software}​
                    </li>
                    <li>
                    <ListSvg />
                    {Inbound_Dialing} ​
                    </li>
                    <li>
                    <ListSvg />
                    {Inbound_Call_Tracking} ​
                    </li>
                    <li>
                    <ListSvg />
                    {Inbound_Leads}
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
                    src="assets/img/inbound/customer-service/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <AboutSection heading={About9_Heading} aboutPara1={About9_para} aboutUsPoints={aboutUsPoints} aboutPara2={About9_para2} imagePath={"assets/img/inbound/customer-service/2.png"}/>
      <Information heading={Information5_Heading} informationPara={Information5_para} informationParaTwo={Information5_para2} imagePath={"assets/img/inbound/customer-service/3.png"} imagePath2={"assets/img/inbound/customer-service/4.png"} headingTwo={Information5_Heading2} informationParaThree={Information5_para3} informationParaFour={Information5_para4}  />      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection /> 
    </Layout>
  );
}

export default  CustomerService;
