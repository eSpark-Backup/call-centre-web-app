import Breadcrumb from "@/components/common/Breadcrumb";
import ContactUsSection from "@/components/contact/ContactUsSection";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import PartnarSlider from "@/components/partner/PartnarSlider";
import {
  nonProfitHeading,
  nonProfitInformationHeading,
  nonProfitInformationHeadingFour,
  nonProfitInformationHeadingThree,
  nonProfitInformationHeadingTwo,
  nonProfitInformationPara,
  nonProfitInformationParaFour,
  nonProfitInformationParaThree,
  nonProfitInformationParaTwo,
  nonProfitPara,
} from "@/constants/Constants";
import React from "react";

function NonProfit() {
  return (
    <>
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
                  src="assets/img/Industries/non-profits/1.jpg"
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
      <IndutriesInformation
        heading={nonProfitInformationHeading}
        informationPara={nonProfitInformationPara}
        imagePath={"assets/img/Industries/non-profits/4.jpg"}
        headingTwo={nonProfitInformationHeadingTwo}
        informationParaTwo={nonProfitInformationParaTwo}
        imagePathTwo={"assets/img/Industries/non-profits/2.jpg"}
        imagePathThree={"assets/img/Industries/non-profits/5.jpg"}
        headingThree={nonProfitInformationHeadingThree}
        informationParaThree={nonProfitInformationParaThree}
        imagePathFour={"assets/img/Industries/non-profits/3.jpg"}
        headingFour={nonProfitInformationHeadingFour}
        informationParaFour={nonProfitInformationParaFour}
      />
      <PartnarSlider />
      <ContactUsSection />
    </>
  );
}

export default NonProfit;
