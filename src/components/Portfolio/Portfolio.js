import React, { useEffect, useState } from "react";
// import atulyaItPark from "../images/gallery/atulya-it-park-1.jpg";
// import robo10 from "../images/gallery/robotronix-india10.jpg";
// import robo11 from "../images/gallery/robotronix-india11.jpg";
// import robo17 from "../images/gallery/robotronix-india17.jpg";
import apnaGaadi from "../images/portfolio/apnagaadi.png";
import manviya from "../images/portfolio/manviya.png";
import electronicsPro from "../images/portfolio/electronicsproduct.png";
import kissanLive from "../images/portfolio/kissanlive.png";
import robotronixImg from "../images/portfolio/robotronix.png";
import fortitude from "../images/portfolio/fortitudegroup-large.png";
import childSecurity from "../images/portfolio/childsecuritysystem.png";
import xpression from "../images/portfolio/xpressiongraphics-large.png";

const Portfolio = () => {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    fetch("/courses")
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      // console.log(res);
      setCourses(res);
    })
  }, [])

  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-panel portfolio_tab-panel">
                <div className="tab-line">
                  <ul className="nav nav-tabs ">
                    {
                      courses.map((course)=>{
                        return (
                          <li>
                      <a
                        href="#tab_default_1"
                        data-bs-toggle="tab"
                        className="nav-link active"
                      >
                        {course.name}
                      </a>
                    </li>
                        )
                      })
                    }
                    {/* <li>
                      <a
                        href="#tab_default_2"
                        data-bs-toggle="tab"
                        className="nav-link"
                      >
                        App Development
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane active" id="tab_default_1">
                    <div className="row">
                      <div className="gallery">
                        <div className="container">
                          {/* <div className="content">
                            <h3>All</h3>
                          </div> */}
                          <main class="main">
                            <div class="galleryContainer AllTab">
                              <div class="card">
                                <div class="card-image">
                                  <img src={apnaGaadi} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Apna Gaadi</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={manviya} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Manviya</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={electronicsPro} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Electronics Pro</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={kissanLive} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Kissan Live</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={robotronixImg} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Robotronix</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={fortitude} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Fortitude</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={childSecurity} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Child Security</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={xpression} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Xpression</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                              {/* <div class="card">
                                <div class="card-image">
                                  <img src={robo17} alt="" />
                                </div>
                              </div> */}
                            </div>
                          </main>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="tab-pane" id="tab_default_2">
                    <div className="row">
                      <div className="gallery">
                        <div className="container">
                          <main class="main">
                            <div class="galleryContainer AppDevTab">
                              <div class="card">
                                <div class="card-image">
                                  <img src={atulyaItPark} alt="" />
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={robo10} alt="" />
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={robo11} alt="" />
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={robo17} alt="" />
                                </div>
                              </div>
                            </div>
                          </main>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="tab-pane" id="tab_default_3">
                    <div className="row">
                      <div className="gallery">
                        <div className="container">
                          <main class="main">
                            <div class="galleryContainer eComTab">
                              <div class="card">
                                <div class="card-image">
                                  <img src={xpression} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Xpression</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                            </div>
                          </main>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab_default_4">
                    <div className="row">
                      <div className="gallery">
                        <div className="container">
                          <main class="main">
                            <div class="galleryContainer IotTab">
                              <div class="card">
                                <div class="card-image">
                                  <img src={childSecurity} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Child Security</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                            </div>
                          </main>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab_default_5">
                    <div className="row">
                      <div className="gallery">
                        <div className="container">
                          <main class="main">
                            <div class="galleryContainer webDevTab">
                              <div class="card">
                                <div class="card-image">
                                  <img src={robotronixImg} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Robotronix</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-image">
                                  <img src={manviya} alt="" />
                                </div>
                                <div className="content">
                                  <h3>Manviya</h3>
                                  <p>Category Name</p>
                                </div>
                              </div>
                            </div>
                          </main>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
