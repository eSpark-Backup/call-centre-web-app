import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Partner5 from "@/components/partner/Partner5";
import Home3Contact from "@/components/contact/Home3Contact";
import Link from "next/link";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information6 from "@/components/details/Information6";
import About10 from "@/components/about/About10";
import { ListSvg } from "@/components/svg/ListSvg";
import { CTA_Campaigns, Call_Action, Call_to_Action, Direct_Response_Ads, Direct_Response_Broadcasting, Inbound_page3_Heading, Inbound_page3_para, Instant_Call_Pickup, Search_Advertising } from "@/constants/Constants";

function DirectResponse() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Direct Response Call Center​"
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
                    <h2>{Inbound_page3_Heading}</h2>
                  </div>
                  <p>{Inbound_page3_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Direct_Response_Ads}
                     </li>
                    <li>
                    <ListSvg />
                    {Call_Action}
                      </li>
                    <li>
                    <ListSvg />
                    {Instant_Call_Pickup}​
                    </li>
                    <li>
                    <ListSvg />
                    {Search_Advertising} ​
                    </li>
                    <li>
                    <ListSvg />
                    {CTA_Campaigns}​​
                    </li>
                    <li>
                    <ListSvg />
                    {Direct_Response_Broadcasting}​
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
                    src="assets/img/inbound/direct-response/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <About10 />
  <Information6 />
      <OurWork />
      <Partner5 />
      <Home3Contact /> 
    </Layout>
  );
}

export default  DirectResponse;
