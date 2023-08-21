import { Information5_Heading, Information5_Heading2, Information5_para, Information5_para2, Information5_para3, Information5_para4 } from '@/constants/Constants'
import React from 'react'

function Information5(){
    return(
        <div className="case-study-details ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{Information5_Heading}</h2>
                    <p>{Information5_para}</p>
                    <p>{Information5_para2}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inbound/customer-service/3.png"
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
                      src="assets/img/inbound/customer-service/4.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{Information5_Heading2} ​</h2>
                    <p>{Information5_para3}</p>
                    <p>{Information5_para4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Information5