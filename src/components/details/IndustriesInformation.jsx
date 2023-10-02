import React from 'react'

function IndutriesInformation({heading, informationPara, informationParaTwo, imagePath, headingTwo, informationParaThree, informationParaFour, imagePathTwo, imagePathThree, headingThree, imagePathFour, headingFour,}){
    return(
        <div className="case-study-details ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{heading} ​</h2>
                    <p>{informationPara}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src={imagePath}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{headingTwo} ​</h2>
                    <p>{informationParaTwo}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src={imagePathTwo}
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
                      src={imagePathThree}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>{headingThree}</h2>
                    <p>{informationParaThree}</p>
                  </div>
                </div>
              </div>
              <div className="row g-lg-4 gy-5 mb-120" style={{paddingBottom:"120px"}}>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src={imagePathFour}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center" >
                  <div className="case-content">
                    <h2>{headingFour}</h2>
                    <p>{informationParaFour}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default IndutriesInformation