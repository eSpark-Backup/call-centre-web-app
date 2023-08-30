import Breadcrumb from "@/components/common/Breadcrumb";
import Home3Contact from "@/components/contact/Home3Contact";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import Layout from "@/components/layout/Layout";
import PartnarSlider from "@/components/partner/PartnarSlider";
import { retailsHeading, retailsInformationHeading, retailsInformationHeadingFour, retailsInformationHeadingThree, retailsInformationHeadingTwo, retailsInformationPara, retailsInformationParaFour, retailsInformationParaThree, retailsInformationParaTwo, retailsPara, telecomHeading, telecomInformationHeading, telecomInformationHeadingFour, telecomInformationHeadingThree, telecomInformationHeadingTwo, telecomInformationPara, telecomInformationParaFour, telecomInformationParaThree, telecomInformationParaTwo, telecomPara, utilitiesHeading, utilitiesInformationHeading, utilitiesInformationHeadingFour, utilitiesInformationHeadingThree, utilitiesInformationHeadingTwo, utilitiesInformationPara, utilitiesInformationParaFour, utilitiesInformationParaThree, utilitiesInformationParaTwo, utilitiesPara } from "@/constants/Constants";
import React from "react";

function Utilities() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Industries"
        title="Utilities"
        pageName="Industries"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{utilitiesHeading}</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/industries/utilities/3.jpg"
                  alt=""
                />
              </div>
              <div className="case-content">
                <p>{utilitiesPara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndutriesInformation heading={utilitiesInformationHeading} informationPara={utilitiesInformationPara} imagePath={"assets/img/industries/utilities/4.jpg"}  headingTwo={utilitiesInformationHeadingTwo} informationParaTwo={utilitiesInformationParaTwo} imagePathTwo={"assets/img/industries/utilities/1.jpg"} imagePathThree={"assets/img/industries/utilities/5.jpg"} headingThree={utilitiesInformationHeadingThree} informationParaThree={utilitiesInformationParaThree} imagePathFour={"assets/img/industries/utilities/2.jpg"} headingFour={utilitiesInformationHeadingFour} informationParaFour={utilitiesInformationParaFour} />
      <PartnarSlider/>
      <Home3Contact />
    </Layout>
  );
}

export default Utilities;
