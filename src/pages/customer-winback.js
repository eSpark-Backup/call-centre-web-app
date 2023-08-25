import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import AboutSection from "@/components/about/AboutSection";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import React from "react";
import { ListSvg } from "@/components/svg/ListSvg";
import { About6_Heading, About6_Para, About6_Para2, B2B_Campaigns, Customer_Heading, Customer_Para, Customer_Retention, Discount_Offers, Hot_Leads, Information2_Heading, Information2_Heading2, Information2_Para, Information2_Para2, Information2_Para3, Information2_Para4, Loyalty_Programs, Outbound_Campaigns, Product_Updates, Rejoining_Rewards, Special_Offers, Unlimited_Calls } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";

const aboutUsPoints = [Customer_Retention, B2B_Campaigns, Discount_Offers, Rejoining_Rewards ];

function CustomerWinback() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Outbound"
        title="Customer Winback"
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
                    <h2>{Customer_Heading}</h2>
                  </div>
                  <p>{Customer_Para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                      {Unlimited_Calls}
                   </li>
                    <li>
                    <ListSvg />
                      {Outbound_Campaigns}
                    </li>
                    <li>
                    <ListSvg />
                     {Hot_Leads}
                    </li>
                    <li>
                    <ListSvg />
                      {Product_Updates}
                    </li>
                    <li>
                    <ListSvg />
                      {Loyalty_Programs}
                    </li>
                    <li>
                    <ListSvg />
                      {Special_Offers}
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
                    src="assets/img/outbound/customer-winback/man-woman.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <AboutSection heading={About6_Heading} aboutPara1={About6_Para} aboutUsPoints={aboutUsPoints} aboutPara2={About6_Para2} imagePath={"assets/img/outbound/customer-winback/making-deal.jpg"} />
      <Information heading={Information2_Heading} informationPara={Information2_Para} informationParaTwo={Information2_Para2} imagePath={"assets/img/outbound/customer-winback/two-business-men.jpg"} imagePath2={"assets/img/outbound/customer-winback/customer-service.jpg"} headingTwo={Information2_Heading2} informationParaThree={Information2_Para3} informationParaFour={Information2_Para4}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection />
    </Layout>
  );
}

export default CustomerWinback;
