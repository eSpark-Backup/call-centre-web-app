import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Partner5 from "@/components/partner/Partner5";
import About6 from "@/components/about/About6";
import Home3Contact from "@/components/contact/Home3Contact";
import OurWork from "@/components/work/OurWork";
import Link from "next/link";
import React from "react";
import { ListSvg } from "@/components/svg/ListSvg";
import { Hot_Leads, Loyalty_Programs, Outbound_Campaigns, Product_Updates, Special_Offers, Unlimited_Calls } from "@/constants/Constants";

function CustomerWinback() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Outbound"
        title="Customer Winback"
        pageName="Outbound"
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
                    <h2>How Do We Acquire Approvals With Customer Winback Service?</h2>
                  </div>
                  <p>
                  Winning the respected approval of old clients is one of the toughest tasks. Companies aim for experienced customer service platforms to get their ex-customers back. The reconnection with old customers will always need time and patience. We have a team of specialists who offer the utmost customer winback services that not only get back the consumers but also sell the services and products at a high value. 
                  </p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                      {Unlimited_Calls}
                   </li>
                    <li>
                    <ListSvg />
                      {Outbound_Campaigns}
                    </li>
                    <li>
                    <ListSvg />
                     {Hot_Leads}
                    </li>
                    <li>
                    <ListSvg />
                      {Product_Updates}
                    </li>
                    <li>
                    <ListSvg />
                      {Loyalty_Programs}
                    </li>
                    <li>
                    <ListSvg />
                      {Special_Offers}
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
                    src="assets/img/outbound/customer-winback/man-woman.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <About6 />
      <OurWork />
      <Partner5 />
      <Home3Contact />
    </Layout>
  );
}

export default CustomerWinback;
