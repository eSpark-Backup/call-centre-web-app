import { Information6_Heading, Information6_Heading2, Information6_para, Information6_para2, Information6_para3, Information6_para4 } from '@/constants/Constants'
import React from 'react'

function Information6(){
    return(
        <div className="case-study-details ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{Information6_Heading}​</h2>
                    <p>{Information6_para}</p>
                    <p>{Information6_para2}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inbound/direct-response/2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inbound/direct-response/4.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{Information6_Heading2}</h2>
                    <p>{Information6_para3}</p>
                    <p>{Information6_para4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Information6