import Breadcrumb from "@/components/common/Breadcrumb";
import ContactUsSection from "@/components/contact/ContactUsSection";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import PartnarSlider from "@/components/partner/PartnarSlider";
import {
  hospitalityHeading,
  hospitalityInformationHeading,
  hospitalityInformationHeadingFour,
  hospitalityInformationHeadingThree,
  hospitalityInformationHeadingTwo,
  hospitalityInformationPara,
  hospitalityInformationParaFour,
  hospitalityInformationParaThree,
  hospitalityInformationParaTwo,
  hospitalityInformationParaTwp,
  hospitalityPara,
} from "@/constants/Constants";
import React from "react";

function Hospitality() {
  return (
    <>
      <Breadcrumb
        pageList="Industries"
        title="Hospitality"
        pageName="Industries"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{hospitalityHeading}</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/Industries/hospitality/2.jpg"
                  alt=""
                />
              </div>
              <div className="case-content ">
                <p>{hospitalityPara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndutriesInformation
        heading={hospitalityInformationHeading}
        informationPara={hospitalityInformationPara}
        imagePath={"assets/img/Industries/hospitality/4.jpg"}
        headingTwo={hospitalityInformationHeadingTwo}
        informationParaTwo={hospitalityInformationParaTwo}
        imagePathTwo={"assets/img/Industries/hospitality/3.jpg"}
        imagePathThree={"assets/img/Industries/hospitality/5.jpg"}
        headingThree={hospitalityInformationHeadingThree}
        informationParaThree={hospitalityInformationParaThree}
        imagePathFour={"assets/img/Industries/hospitality/1.jpg"}
        headingFour={hospitalityInformationHeadingFour}
        informationParaFour={hospitalityInformationParaFour}
      />
      <PartnarSlider />
      <ContactUsSection />
    </>
  );
}

export default Hospitality;
