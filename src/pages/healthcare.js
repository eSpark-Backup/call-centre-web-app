import Breadcrumb from "@/components/common/Breadcrumb";
import ContactUsSection from "@/components/contact/ContactUsSection";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import Layout from "@/components/layout/Layout";
import PartnarSlider from "@/components/partner/PartnarSlider";
import { healthcareHeading, healthcareInformationHeading, healthcareInformationHeadingFour, healthcareInformationHeadingThree, healthcareInformationHeadingTwo, healthcareInformationPara, healthcareInformationParaFour, healthcareInformationParaThree, healthcareInformationParaTwo, healthcarePara } from "@/constants/Constants";
import React from "react";

function HealthCare() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Industries"
        title="Healthcare"
        pageName="Industries"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{healthcareHeading}</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/Industries/healthcare/4.jpg"
                  alt=""
                />
              </div>
              <div className="case-content ">
                <p>{healthcarePara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndutriesInformation heading={healthcareInformationHeading} informationPara={healthcareInformationPara} imagePath={"assets/img/Industries/healthcare/5.jpg"}  headingTwo={healthcareInformationHeadingTwo} informationParaTwo={healthcareInformationParaTwo} imagePathTwo={"assets/img/Industries/healthcare/2.jpg"} imagePathThree={"assets/img/Industries/healthcare/3.jpg"} headingThree={healthcareInformationHeadingThree} informationParaThree={healthcareInformationParaThree} imagePathFour={"assets/img/Industries/healthcare/1.jpg"} headingFour={healthcareInformationHeadingFour} informationParaFour={healthcareInformationParaFour} />
      <PartnarSlider/>
      <ContactUsSection />
    </Layout>
  );
}

export default HealthCare;
