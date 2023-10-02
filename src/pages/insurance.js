import Breadcrumb from "@/components/common/Breadcrumb";
import ContactUsSection from "@/components/contact/ContactUsSection";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import Layout from "@/components/layout/Layout";
import PartnarSlider from "@/components/partner/PartnarSlider";
import {  insuranceHeading, insuranceInformationHeading, insuranceInformationHeadingFour, insuranceInformationHeadingThree, insuranceInformationHeadingTwo, insuranceInformationPara, insuranceInformationParaFour, insuranceInformationParaThree, insuranceInformationParaTwo, insurancePara } from "@/constants/Constants";
import React from "react";

function Insurance() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Industries"
        title="Insurance"
        pageName="Industries"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{insuranceHeading}</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/Industries/insurance/3.jpg"
                  alt=""
                />
              </div>
              <div className="case-content">
                <p>{insurancePara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndutriesInformation heading={insuranceInformationHeading} informationPara={insuranceInformationPara} imagePath={"assets/img/Industries/insurance/4.jpg"}  headingTwo={insuranceInformationHeadingTwo} informationParaTwo={insuranceInformationParaTwo} imagePathTwo={"assets/img/Industries/insurance/2.jpg"} imagePathThree={"assets/img/Industries/insurance/1.jpg"} headingThree={insuranceInformationHeadingThree} informationParaThree={insuranceInformationParaThree} imagePathFour={"assets/img/Industries/insurance/5.jpg"} headingFour={insuranceInformationHeadingFour} informationParaFour={insuranceInformationParaFour} />
      <PartnarSlider/>
      <ContactUsSection />
    </Layout>
  );
}

export default Insurance;
