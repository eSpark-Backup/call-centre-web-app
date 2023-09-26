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
                  src="/assets/img/industries/automotive/3.jpg"
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
      <IndutriesInformation heading={automotiveInformationHeading} informationPara={automotiveInformationPara} imagePath={"/assets/img/industries/automotive/4.jpg"}  headingTwo={automotiveInformationHeadingTwo} informationParaTwo={automotiveInformationParaTwo} imagePathTwo={"/assets/img/industries/automotive/5.jpg"} imagePathThree={"/assets/img/industries/automotive/1.jpg"} headingThree={automotiveInformationHeadingThree} informationParaThree={automotiveInformationParaThree} imagePathFour={"/assets/img/industries/automotive/2.jpg"} headingFour={automotiveInformationHeadingFour} informationParaFour={automotiveInformationParaFour} />
      <PartnarSlider/>
      <Home3Contact />
    </Layout>
  );
}

export default Automotive;
