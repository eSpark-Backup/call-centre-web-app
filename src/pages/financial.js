import Breadcrumb from "@/components/common/Breadcrumb";
import ContactUsSection from "@/components/contact/ContactUsSection";
import IndutriesInformation from "@/components/details/IndustriesInformation";
import PartnarSlider from "@/components/partner/PartnarSlider";
import {
  financialHeading,
  financialInformationHeading,
  financialInformationHeadingFour,
  financialInformationHeadingThree,
  financialInformationHeadingTwo,
  financialInformationPara,
  financialInformationParaFour,
  financialInformationParaThree,
  financialInformationParaTwo,
  financialPara,
} from "@/constants/Constants";
import React from "react";

function Financial() {
  return (
    <>
      <Breadcrumb
        pageList="Industries"
        title="Financial"
        pageName="Industries"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{financialHeading}</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/Industries/financial/1.jpg"
                  alt=""
                />
              </div>
              <div className="case-content ">
                <p>{financialPara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndutriesInformation
        heading={financialInformationHeading}
        informationPara={financialInformationPara}
        imagePath={"assets/img/Industries/financial/2.jpg"}
        headingTwo={financialInformationHeadingTwo}
        informationParaTwo={financialInformationParaTwo}
        imagePathTwo={"assets/img/Industries/financial/3.jpg"}
        imagePathThree={"assets/img/Industries/financial/5.jpg"}
        headingThree={financialInformationHeadingThree}
        informationParaThree={financialInformationParaThree}
        imagePathFour={"assets/img/Industries/financial/4.jpg"}
        headingFour={financialInformationHeadingFour}
        informationParaFour={financialInformationParaFour}
      />
      <PartnarSlider />
      <ContactUsSection />
    </>
  );
}

export default Financial;
