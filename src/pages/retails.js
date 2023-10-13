import Breadcrumb from "@/components/common/Breadcrumb";
import ContactUsSection from "@/components/contact/ContactUsSection";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import PartnarSlider from "@/components/partner/PartnarSlider";
import {
  retailsHeading,
  retailsInformationHeading,
  retailsInformationHeadingFour,
  retailsInformationHeadingThree,
  retailsInformationHeadingTwo,
  retailsInformationPara,
  retailsInformationParaFour,
  retailsInformationParaThree,
  retailsInformationParaTwo,
  retailsPara,
} from "@/constants/Constants";
import React from "react";

function Retails() {
  return (
    <>
      <Breadcrumb pageList="Industries" title="Retails" pageName="Industries" />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{retailsHeading}</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/Industries/retails/2.jpg"
                  alt=""
                />
              </div>
              <div className="case-content ">
                <p>{retailsPara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndutriesInformation
        heading={retailsInformationHeading}
        informationPara={retailsInformationPara}
        imagePath={"assets/img/Industries/retails/1.jpg"}
        headingTwo={retailsInformationHeadingTwo}
        informationParaTwo={retailsInformationParaTwo}
        imagePathTwo={"assets/img/Industries/retails/3.jpg"}
        imagePathThree={"assets/img/Industries/retails/4.jpg"}
        headingThree={retailsInformationHeadingThree}
        informationParaThree={retailsInformationParaThree}
        imagePathFour={"assets/img/Industries/retails/5.jpg"}
        headingFour={retailsInformationHeadingFour}
        informationParaFour={retailsInformationParaFour}
      />
      <PartnarSlider />
      <ContactUsSection />
    </>
  );
}

export default Retails;
