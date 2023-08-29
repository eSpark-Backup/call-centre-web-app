import Breadcrumb from "@/components/common/Breadcrumb";
import Home3Contact from "@/components/contact/Home3Contact";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import Layout from "@/components/layout/Layout";
import PartnarSlider from "@/components/partner/PartnarSlider";
import { automotiveHeading, automotiveInformationHeading, automotiveInformationHeadingFour, automotiveInformationHeadingThree, automotiveInformationHeadingTwo, automotiveInformationPara, automotiveInformationParaFour, automotiveInformationParaThree, automotiveInformationParaTwo, automotivePara } from "@/constants/Constants";
import React from "react";

function Automotive() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Industries"
        title="Automotive"
        pageName="Industries"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{automotiveHeading}</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/inner-pages/case-study-img-01.png"
                  alt=""
                />
              </div>
              <div className="case-content ">
                <p>{automotivePara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndutriesInformation heading={automotiveInformationHeading} informationPara={automotiveInformationPara} imagePath={"assets/img/inner-pages/case-study-img-02.png"}  headingTwo={automotiveInformationHeadingTwo} informationParaTwo={automotiveInformationParaTwo} imagePathTwo={"assets/img/inner-pages/case-study-img-02.png"} imagePathThree={"assets/img/inner-pages/case-study-img-02.png"} headingThree={automotiveInformationHeadingThree} informationParaThree={automotiveInformationParaThree} imagePathFour={"assets/img/inner-pages/case-study-img-02.png"} headingFour={automotiveInformationHeadingFour} informationParaFour={automotiveInformationParaFour} />
      <PartnarSlider/>
      <Home3Contact />
    </Layout>
  );
}

export default Automotive;
