import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Partner5 from "@/components/partner/Partner5";
import About9 from "@/components/about/About9";
import Home3Contact from "@/components/contact/Home3Contact";
import Link from "next/link";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information5 from "@/components/details/Information5";
import { ListSvg } from "@/components/svg/ListSvg";
import { CRM_System, Inbound_Call_Tracking, Inbound_Dialing, Inbound_Leads, Inbound_page2_Heading, Inbound_page2_para, Live_Chat_Software, Trained_Agents } from "@/constants/Constants";

function CustomerService() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title=" Customer Service​​"
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
                    <h2>{Inbound_page2_Heading}​</h2>
                  </div>
                  <p>{Inbound_page2_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Trained_Agents}
                   </li>
                    <li>
                    <ListSvg />
                    {CRM_System}</li>
                    <li>
                    <ListSvg />
                    {Live_Chat_Software}​
                    </li>
                    <li>
                    <ListSvg />
                    {Inbound_Dialing} ​
                    </li>
                    <li>
                    <ListSvg />
                    {Inbound_Call_Tracking} ​
                    </li>
                    <li>
                    <ListSvg />
                    {Inbound_Leads}
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
                    src="assets/img/inbound/customer-service/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <About9 />
  <Information5 />
      <OurWork />
      <Partner5 />
      <Home3Contact /> 
    </Layout>
  );
}

export default  CustomerService;
