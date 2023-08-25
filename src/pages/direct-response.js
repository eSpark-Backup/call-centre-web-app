import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import { ListSvg } from "@/components/svg/ListSvg";
import { About10_Heading, About10_para, About10_para2, CTA_Campaigns, Call_Action, Call_to_Action, Direct_Leads, Direct_Response_Ads, Direct_Response_Broadcasting, Easy_Performance_Tracking, Effortless_Campaign, Inbound_page3_Heading, Inbound_page3_para, Information5_Heading, Information5_para, Information6_Heading, Information6_Heading2, Information6_para, Information6_para2, Information6_para3, Information6_para4, Instant_Call_Pickup, Quick_ROI, Search_Advertising } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [Direct_Leads, Quick_ROI, Easy_Performance_Tracking, Effortless_Campaign ];

function DirectResponse() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Direct Response Call Center​"
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
                    <h2>{Inbound_page3_Heading}</h2>
                  </div>
                  <p>{Inbound_page3_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Direct_Response_Ads}
                     </li>
                    <li>
                    <ListSvg />
                    {Call_Action}
                      </li>
                    <li>
                    <ListSvg />
                    {Instant_Call_Pickup}​
                    </li>
                    <li>
                    <ListSvg />
                    {Search_Advertising} ​
                    </li>
                    <li>
                    <ListSvg />
                    {CTA_Campaigns}​​
                    </li>
                    <li>
                    <ListSvg />
                    {Direct_Response_Broadcasting}​
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
                    src="assets/img/inbound/direct-response/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style={{fontSize:"80px"}}>
        <AboutSection  heading={About10_Heading} aboutPara1={About10_para} aboutUsPoints={aboutUsPoints} aboutPara2={About10_para2} imagePath={"assets/img/inbound/direct-response/3.png"} />
        </div>
        <Information heading={Information6_Heading} informationPara={Information6_para} informationParaTwo={Information6_para2} imagePath={"assets/img/inbound/direct-response/2.png"} imagePath2={"assets/img/inbound/direct-response/4.png"} headingTwo={Information6_Heading2} informationParaThree={Information6_para3} informationParaFour={Information6_para4}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection /> 
    </Layout>
  );
}

export default  DirectResponse;
