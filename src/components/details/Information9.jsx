import { Information9_Heading, Information9_Heading2, Information9_para, Information9_para2, Information9_para3, Information9_para4 } from '@/constants/Constants'
import React from 'react'

function Information9(){
    return(
        <div className="case-study-details ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{Information9_Heading}</h2>
                    <p>{Information9_para}</p>
                    <p>{Information9_para2}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inbound/live-chat/1.png"
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
                      src="assets/img/inbound/live-chat/3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{Information9_Heading2}​</h2>
                    <p>{Information9_para3}</p>
                    <p>{Information9_para4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Information9