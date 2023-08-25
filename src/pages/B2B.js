import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import React from "react";
import { ListSvg } from "@/components/svg/ListSvg";
import { About5_Heading, About5_Para, About5_Para2, Active_Management, Affordable_Telemarketing_Campaigns, B2B_Heading, B2B_Para, Call_Recording, Convincing_Product_Pitches, Customer_Retention_Campaigns, Information1_Heading, Information1_Heading2, Information1_Para, Information1_Para2, Information1_Para3, Information1_Para4, Inviting_Scripts, Modern_Dialer_Experts, Positive_Brand_Massage, Profit_Guaranteed, Tele_Sales } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";
import AboutSection from "@/components/about/AboutSection";

const aboutUsPoints = [Profit_Guaranteed, Modern_Dialer_Experts, Positive_Brand_Massage, Convincing_Product_Pitches ];

function ServicePage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Outbound"
        title="B2B Telemarketing​"
        pageName="Outbound"
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
                    <h2>{B2B_Heading}</h2>
                  </div>
                  <p>{B2B_Para}</p>
                  <ul className="about-featue">
                    <li>
                      <ListSvg />
                  {Active_Management}
                   </li>
                    <li>
                    <ListSvg />
                    {Customer_Retention_Campaigns}
                    </li>
                    <li>
                    <ListSvg />
                      {Call_Recording}
                    </li>
                    <li>
                    <ListSvg />
                      {Inviting_Scripts}
                    </li>
                    <li>
                    <ListSvg />
                      {Tele_Sales}
                    </li>
                    <li>
                    <ListSvg />
                      {Affordable_Telemarketing_Campaigns}
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
                    src="assets/img/outbound/B2B/support.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <AboutSection heading={About5_Heading} aboutPara1={About5_Para} aboutUsPoints={aboutUsPoints} aboutPara2={About5_Para2} imagePath={"assets/img/outbound/B2B/colleagues.jpg"} />
      <Information heading={Information1_Heading} informationPara={Information1_Para} informationParaTwo={Information1_Para2} imagePath={"assets/img/outbound/B2B/businesswoman.jpg"} imagePath2={"assets/img/outbound/B2B/people-working.jpg"} headingTwo={Information1_Heading2} informationParaThree={Information1_Para3} informationParaFour={Information1_Para4}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection />
    </Layout>
  );
}

export default ServicePage;
