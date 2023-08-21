import { Information7_Heading, Information7_Heading2, Information7_para, Information7_para2, Information7_para3, Information7_para4 } from '@/constants/Constants'
import React from 'react'

function Information7(){
    return(
        <div className="case-study-details ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{Information7_Heading}​</h2>
                    <p>{Information7_para}</p>
                    <p>{Information7_para2}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inbound/event-registration/3.png"
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
                      src="assets/img/inbound/event-registration/4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{Information7_Heading2}</h2>
                    <p>{Information7_para3}</p>
                    <p>{Information7_para4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Information7