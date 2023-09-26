import Breadcrumb from "@/components/common/Breadcrumb";
import Home3Contact from "@/components/contact/Home3Contact";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import Layout from "@/components/layout/Layout";
import PartnarSlider from "@/components/partner/PartnarSlider";
import { retailsHeading, retailsInformationHeading, retailsInformationHeadingFour, retailsInformationHeadingThree, retailsInformationHeadingTwo, retailsInformationPara, retailsInformationParaFour, retailsInformationParaThree, retailsInformationParaTwo, retailsPara, telecomHeading, telecomInformationHeading, telecomInformationHeadingFour, telecomInformationHeadingThree, telecomInformationHeadingTwo, telecomInformationPara, telecomInformationParaFour, telecomInformationParaThree, telecomInformationParaTwo, telecomPara } from "@/constants/Constants";
import React from "react";

function Telecom() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Industries"
        title="Telecom"
        pageName="Industries"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{telecomHeading}</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/Industries/telecom/4.jpg"
                  alt=""
                />
              </div>
              <div className="case-content ">
                <p>{telecomPara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndutriesInformation heading={telecomInformationHeading} informationPara={telecomInformationPara} imagePath={"assets/img/Industries/telecom/1.jpg"}  headingTwo={telecomInformationHeadingTwo} informationParaTwo={telecomInformationParaTwo} imagePathTwo={"assets/img/Industries/telecom/3.jpg"} imagePathThree={"assets/img/Industries/telecom/5.jpg"} headingThree={telecomInformationHeadingThree} informationParaThree={telecomInformationParaThree} imagePathFour={"assets/img/Industries/telecom/2.jpg"} headingFour={telecomInformationHeadingFour} informationParaFour={telecomInformationParaFour} />
      <PartnarSlider/>
      <Home3Contact />
    </Layout>
  );
}

export default Telecom;
