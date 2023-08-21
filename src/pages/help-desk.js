import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Partner5 from "@/components/partner/Partner5";
import Home3Contact from "@/components/contact/Home3Contact";
import Link from "next/link";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information8 from "@/components/details/Information8";
import About12 from "@/components/about/About12";
import { ListSvg } from "@/components/svg/ListSvg";
import {Billing_inquiries, IT_Solutions, Inbound_page5_Heading, Inbound_page5_para, IoT_Related_Assistance, Logistic_Support, Technical_Support, Warranty_Support } from "@/constants/Constants";

function HelpDesk() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Help Desk Call Center​"
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
                    <h2>{Inbound_page5_Heading}</h2>
                  </div>
                  <p>{Inbound_page5_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {IT_Solutions} ​
                     </li>
                    <li>
                    <ListSvg />
                    {IoT_Related_Assistance}​
                      </li>
                    <li>
                    <ListSvg />
                    {Billing_inquiries}
                    </li>
                    <li>
                    <ListSvg />
                    {Logistic_Support}​​​
                    </li>
                    <li>
                    <ListSvg />
                    {Technical_Support} ​
                    </li>
                    <li>
                    <ListSvg />
                    {Warranty_Support}​
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
                    src="assets/img/inbound/help-desk/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <About12 />
  <Information8 />
      <OurWork />
      <Partner5 />
      <Home3Contact /> 
    </Layout>
  );
}

export default  HelpDesk;
