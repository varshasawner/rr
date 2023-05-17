import React from "react";

const JobDescrption = () => {
  return (
    <>
      <div className="jobDes">
        <div className="">
          <div className="container common_space jobDesHead">
            <div className="row">
              <div className="col-md-12">
                <h2 className="job_title text-center">Job Role</h2>
              </div>
            </div>
            <div className="jobDesReq">
              <div className="row">
                <div className="col-md-6 content">
                  <h3 className="job_description">Job Description</h3>
                  <h4 className="job_subtitle">Job Role</h4>
                  <p className="experience">0-1 Year / 0-1 Opening / Indore</p>
                  <h4 className="job_skills">Skills, Roles, and Responsibilities</h4>
                  <div className="pt-3">
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;<span>Good understanding of SEO process - On Page & Off Page</span>
                    </p>
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;<span>Knowledge of Google Ads (PPC)</span>
                    </p>
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;<span>Knowledge of Google Analytics & Google Webmaster Tools</span>
                    </p>
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;<span>Understanding of Social Media & Content Marketing</span>
                    </p>
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;<span>Good Communication Skills (Written & Verbal)</span>
                    </p>
                  </div>
                  <p className="job_note">
                    Candidate who have good english communiction skill as well
                    as who have completed a course on Digital Marketing from any
                    renowned institution may apply for the position.
                  </p>
                  <p className="job_note">
                    If this opportunity interests you and you fit the job
                    description, please apply!
                  </p>
                  <p className="job_note">OR</p>
                  <p className="job_note">mail us : resume.bitbyteindia.com</p>
                </div>
                <div className="col-md-6 ">
                  <div className="jobForm">
                    <div className="card">
                      <div className="card-body">
                        <div>
                          <h3 className="apply_here">Apply Here</h3>
                          <p className="job_details pb-3">To apply for this position please fill your details with your resume.</p>
                        </div>
                        <form method="POST" id="reset" encType="multipat/form-data">
                          <div class="form-group">
                            <label>First Name *</label><input
                              type="text"
                              placeholder="Enter First Name"
                              // value=""
                              name="firstName"
                              className="form-control"
                              //   onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Last Name *</label>
                            <input
                              type="text"
                              placeholder="Enter Last Name"
                              // value=""
                              name="lastName"
                              className="form-control"
                              //   onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Email *</label>
                            <input
                              type="email"
                              placeholder="Enter Email"
                              // value=""
                              name="email"
                              className="form-control"
                              //   onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Phone *</label>
                            <input
                              type="text"
                              placeholder="Enter Phone Number"
                              // value=""
                              name="phone"
                              className="form-control"
                              //   onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Experience in years *</label>
                            <input
                              type="text"
                              placeholder="Enter Experience"
                              // value=""
                              name="experience"
                              className="form-control"
                              //   onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Location *</label>
                            <input
                              type="text"
                              placeholder="Enter Location"
                              // value=""
                              name="location"
                              className="form-control"
                              //   onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Upload Resume Here *</label>
                            <input
                              type="file"
                              // value=""
                              name="resume"
                              className="form-control"
                              //   onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>CAPTCHA</label>
                          </div>
                          </form>
                        </div>
                        <div className="card-footer">
                          <button>Submit</button>
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

export default JobDescrption;
