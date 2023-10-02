import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import ServicesPartnerSection from "@/components/partner/ServicesPartnerSection";
import AboutSection from "@/components/about/AboutSection";
import OurWork from "@/components/work/OurWork";
import Information from "@/components/details/Information";
import React from "react";
import { ListSvg } from "@/components/svg/ListSvg";
import {b2BCampaigns, customerHeading, customerPara, customerRetention, customerWinbackAboutHeading, customerWinbackAboutPara, customerWinbackAboutParaTwo, customerWinbackInformationHeading, customerWinbackInformationHeadingTwo, customerWinbackInformationPara, customerWinbackInformationParaFour, customerWinbackInformationParaThree, customerWinbackInformationParaTwo, discountOffers, hotLeads, loyaltyPrograms, outboundCampaigns, productUpdates, rejoiningRewards, specialOffers, unlimitedCalls } from "@/constants/Constants";
import ContactUsSection from "@/components/contact/ContactUsSection";

const aboutUsPoints = [customerRetention, b2BCampaigns, discountOffers, rejoiningRewards ];
const servicePoints = [unlimitedCalls, outboundCampaigns, hotLeads, productUpdates, loyaltyPrograms, specialOffers ];

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
                    <h2>{customerHeading}</h2>
                  </div>
                  <p>{customerPara}</p>
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
                    src="assets/img/outbound/customer-winback/man-woman.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <AboutSection heading={customerWinbackAboutHeading} aboutPara1={customerWinbackAboutPara} aboutUsPoints={aboutUsPoints} aboutPara2={customerWinbackAboutParaTwo} imagePath={"assets/img/outbound/customer-winback/making-deal.jpg"} />
      <Information heading={customerWinbackInformationHeading} informationPara={customerWinbackInformationPara} informationParaTwo={customerWinbackInformationParaTwo} imagePath={"assets/img/outbound/customer-winback/two-business-men.jpg"} imagePath2={"assets/img/outbound/customer-winback/customer-service.jpg"} headingTwo={customerWinbackInformationHeadingTwo} informationParaThree={customerWinbackInformationParaThree} informationParaFour={customerWinbackInformationParaFour}  />
      <OurWork />
      <ServicesPartnerSection />
      <ContactUsSection />
    </Layout>
  );
}

export default CustomerWinback;
