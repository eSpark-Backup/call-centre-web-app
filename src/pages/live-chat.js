import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Partner5 from "@/components/partner/Partner5";
import Home3Contact from "@/components/contact/Home3Contact";
import Link from "next/link";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information9 from "@/components/details/Information9";
import About13 from "@/components/about/About13";
import { ListSvg } from "@/components/svg/ListSvg";
import { Automate_Response, Automated_Response, Broadband_Internet, Feedback_Survey_Tools, Inbound_page6_Heading, Inbound_page6_para, Natural_Conversation, Online_Communication_System, Reporting_Dashboard } from "@/constants/Constants";

function LiveChat() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Live Chat Outsourcing​​"
        pageName="Inbound"
      />
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
                    <h2>{Inbound_page6_Heading}</h2>
                  </div>
                  <p>{Inbound_page6_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Natural_Conversation} ​​
                     </li>
                    <li>
                    <ListSvg />
                    {Automated_Response}​​
                      </li>
                    <li>
                    <ListSvg />
                    {Online_Communication_System}
                    </li>
                    <li>
                    <ListSvg />
                    {Reporting_Dashboard} ​​​​
                    </li>
                    <li>
                    <ListSvg />
                    {Broadband_Internet}​​
                    </li>
                    <li>
                    <ListSvg />
                    {Feedback_Survey_Tools}​​
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
                    src="assets/img/inbound/live-chat/4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <About13 />
  <Information9 />
      <OurWork />
      <Partner5 />
      <Home3Contact /> 
    </Layout>
  );
}

export default  LiveChat;
