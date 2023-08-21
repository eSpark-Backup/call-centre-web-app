import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Partner5 from "@/components/partner/Partner5";
import About8 from "@/components/about/About8";
import Home3Contact from "@/components/contact/Home3Contact";
import Link from "next/link";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information4 from "@/components/details/Information4";
import { ListSvg } from "@/components/svg/ListSvg";
import { Automated_Response, Automatic_Call_Distribution, CNAM, Caller_Identification, Inbound_page1_Heading, Inbound_page1_para, Interactive_Voice_Response, VoIP } from "@/constants/Constants";

function ServicePage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Business Call Screening​​"
        pageName="Inbound"
      />
      <About8 />
      <div className="service-details ">
        <div className="about-services sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-6 d-flex align-items-center wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="about-content">
                  <div className="section-title-5">
                    <h2>{Inbound_page1_Heading}</h2>
                  </div>
                  <p>{Inbound_page1_para} </p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Caller_Identification}
                   </li>
                    <li>
                    <ListSvg />
                    {Automated_Response}</li>
                    <li>
                    <ListSvg />
                    {VoIP}
                    </li>
                    <li>
                    <ListSvg />
                    {Interactive_Voice_Response}
                    </li>
                    <li>
                    <ListSvg />
                    {Automatic_Call_Distribution}
                    </li>
                    <li>
                    <ListSvg />
                      {CNAM}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 wow animate fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="service-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/inbound/business-call-screening/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  <Information4 />
      <OurWork />
      <Partner5 />
      <Home3Contact /> 
    </Layout>
  );
}

export default ServicePage;
