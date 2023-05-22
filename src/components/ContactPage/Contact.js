import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactPage">
        <div className="container contactHead">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Get Started Now</h2>
              <p>
                We are here to grow your business through technology services.
                Let's Connect!
              </p>
            </div>
          </div>
        </div>
        <div className="container contactForm">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <form method="POST" id="reset" encType="multipat/form-data">
                  <div className="card-body">
                    <div className="row">
                      <div class="form-group col">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          placeholder="Enter Full Name"
                          // value=""
                          name="fullName"
                          className="form-control"
                          //   onChange={handleFormData}
                        />
                      </div>
                      <div class="form-group col">
                        <label>Company Name *</label>
                        <input
                          type="text"
                          placeholder="Enter Company Name"
                          // value=""
                          name="companyName"
                          className="form-control"
                          //   onChange={handleFormData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div class="form-group col">
                        <label>Company Location *</label>
                        <input
                          type="text"
                          placeholder="Enter Location"
                          // value=""
                          name="location"
                          className="form-control"
                          //   onChange={handleFormData}
                        />
                      </div>
                      <div class="form-group col">
                        <label>Work Email Address *</label>
                        <input
                          type="email"
                          placeholder="Enter Email"
                          // value=""
                          name="email"
                          className="form-control"
                          //   onChange={handleFormData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div class="form-group col">
                        <label>Phone Number *</label>
                        <input
                          type="text"
                          placeholder="Enter Phone Number"
                          // value=""
                          name="phone"
                          className="form-control"
                          //   onChange={handleFormData}
                        />
                      </div>
                      <div class="form-group col">
                        <label>Approx Budget *</label>
                        <input
                          type="text"
                          placeholder="Enter Approx Budget"
                          // value=""
                          name="budget"
                          className="form-control"
                          //   onChange={handleFormData}
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <label>Tell us about your project *</label>
                      <textarea
                        // value=""
                        name="aboutProject"
                        placeholder="Tell us about your project"
                        rows="6"
                        className="form-control"
                        //   onChange={handleFormData}
                      />
                    </div>
                    <div class="form-group">
                      <label>CAPTCHA</label>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="map pt-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.103188616064!2d75.86898577522459!3d22.
          687202279410286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce4f782bca5%3A0xb3fccf1895e43036!
          2sROBOTRONiX%20India!5e0!3m2!1sen!2sin!4v1684304670185!5m2!1sen!2sin" width="100%" height="450" 
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
