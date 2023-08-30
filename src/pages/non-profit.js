import Breadcrumb from "@/components/common/Breadcrumb";
import Home3Contact from "@/components/contact/Home3Contact";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import Layout from "@/components/layout/Layout";
import PartnarSlider from "@/components/partner/PartnarSlider";
import { nonProfitHeading, nonProfitInformationHeading, nonProfitInformationHeadingFour, nonProfitInformationHeadingThree, nonProfitInformationHeadingTwo, nonProfitInformationPara, nonProfitInformationParaFour, nonProfitInformationParaThree, nonProfitInformationParaTwo, nonProfitPara } from "@/constants/Constants";
import React from "react";

function NonProfit() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Industries"
        title="Non-Profits"
        pageName="Industries"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{nonProfitHeading}</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/industries/non-profits/1.jpg"
                  alt=""
                />
              </div>
              <div className="case-content ">
                <p>{nonProfitPara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndutriesInformation heading={nonProfitInformationHeading} informationPara={nonProfitInformationPara} imagePath={"assets/img/industries/non-profits/4.jpg"}  headingTwo={nonProfitInformationHeadingTwo} informationParaTwo={nonProfitInformationParaTwo} imagePathTwo={"assets/img/industries/non-profits/2.jpg"} imagePathThree={"assets/img/industries/non-profits/5.jpg"} headingThree={nonProfitInformationHeadingThree} informationParaThree={nonProfitInformationParaThree} imagePathFour={"assets/img/industries/non-profits/3.jpg"} headingFour={nonProfitInformationHeadingFour} informationParaFour={nonProfitInformationParaFour} />
      <PartnarSlider/>
      <Home3Contact />
    </Layout>
  );
}

export default NonProfit;
