import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Partner5 from "@/components/partner/Partner5";
import Home3Contact from "@/components/contact/Home3Contact";
import Link from "next/link";
import React from "react";
import OurWork from "@/components/work/OurWork";
import Information7 from "@/components/details/Information7";
import About11 from "@/components/about/About11";
import { ListSvg } from "@/components/svg/ListSvg";
import { Business_Event_Registrations, Conference_Registration, Festival_Registrations, Inbound_page4_Heading, Inbound_page4_para, Seminar_Registration, Trade_Shows_Registrations, Webinar_Registration } from "@/constants/Constants";

function EventRegistration() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Inbound"
        title="Event Registration​​"
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
                    <h2>{Inbound_page4_Heading}</h2>
                  </div>
                  <p>{Inbound_page4_para}</p>
                  <ul className="about-featue">
                    <li>
                    <ListSvg />
                    {Seminar_Registration} ​
                     </li>
                    <li>
                    <ListSvg />
                    {Conference_Registration} ​
                      </li>
                    <li>
                    <ListSvg />
                    {Webinar_Registration}
                    </li>
                    <li>
                    <ListSvg />
                    {Business_Event_Registrations}
                    </li>
                    <li>
                    <ListSvg />
                    {Trade_Shows_Registrations}
                    </li>
                    <li>
                    <ListSvg />
                    {Festival_Registrations}
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
                    src="assets/img/inbound/event-registration/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <About11 />
  <Information7 />
      <OurWork />
      <Partner5 />
      <Home3Contact /> 
    </Layout>
  );
}

export default  EventRegistration;
