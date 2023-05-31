import React, { useState, useEffect } from "react";


const Contact = () => {
  const [GenCaptcha, setGenCaptcha] = useState("");
  const [msg, setMsg] = useState("");
  const [userData, setUserData] = useState({
    fullName : "",
    email : "",
    companyName : "",
    companyLocation : "",
    phone : "",
    budget : "",
    aboutProject : "",
    captchaText:""
  })

  let name, value;
  const handleFormData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({...userData, [name]:value})
    console.log(userData)
  }

  const sendContact = async (e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.set('fullName',userData.fullName);
    formData.set('email',userData.email);
    formData.set('companyName',userData.companyName);
    formData.set('companyLocation',userData.companyLocation);
    formData.set('phone',userData.phone);
    formData.set('budget',userData.budget);
    formData.set('aboutProject',userData.aboutProject);
    formData.set('captcha',GenCaptcha);
    formData.set('captchaText',userData.captchaText);

    const res = await fetch("/contact", {
      method:"post",
      body : formData
    })
    const data = await res.json();
    if (data.status === 422 || data.error) {
      setMsg(data);
      generate();
    } else {
      console.log(data)
      setMsg(data);
      setUserData({
        fullName : "",
        email : "",
        companyName : "",
        companyLocation : "",
        phone : "",
        budget : "",
        aboutProject : "",
        captchaText:""
      });
      generate()
    }
  }
  function generate() {
    let uniquechar = "";
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i <= 6; i++) {
      uniquechar += randomchar.charAt(Math.random() * randomchar.length);
    }
    // Store generated input
    setGenCaptcha(uniquechar);
  }
  useEffect(()=>{
    generate();
  },[])
  
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
                <form method="POST" id="reset" encType="multipat/form-data" onSubmit={sendContact}>
                  <div className="card-body">
                    <div className="row">
                      <div class="form-group col">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          value={userData.fullName}
                          name="fullName"
                          className="form-control"
                          autoComplete="new-password"
                          onChange={handleFormData}
                        />
                      </div>
                      <div class="form-group col">
                        <label>Company Name *</label>
                        <input
                          type="text"
                          value={userData.companyName}
                          name="companyName"
                          className="form-control"
                          autoComplete="new-password"
                          onChange={handleFormData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div class="form-group col">
                        <label>Company Location *</label>
                        <input
                          type="text"
                          value={userData.companyLocation}
                          name="companyLocation"
                          className="form-control"
                          autoComplete="new-password"
                          onChange={handleFormData}
                        />
                      </div>
                      <div class="form-group col">
                        <label>Work Email Address *</label>
                        <input
                          type="email"
                          value={userData.email}
                          name="email"
                          className="form-control"
                          autoComplete="new-password"
                          onChange={handleFormData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div class="form-group col">
                        <label>Phone Number *</label>
                        <input
                          type="text"
                          value={userData.phone}
                          name="phone"
                          className="form-control"
                          autoComplete="new-password"
                          onChange={handleFormData}
                        />
                      </div>
                      <div class="form-group col">
                        <label>Approx Budget *</label>
                        <input
                          type="text"
                          value={userData.budget}
                          name="budget"
                          className="form-control"
                          autoComplete="new-password"
                          onChange={handleFormData}
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <label>Tell us about your project *</label>
                      <textarea
                        value={userData.aboutProject}
                        name="aboutProject"
                        rows="6"
                        className="form-control"
                        autoComplete="new-password"
                        onChange={handleFormData}
                      />
                    </div>
                    <div class="form-group">
                      <label>Captcha *</label>
                      <input type="text" className="form-control contact_row" value={userData.captchaText} onChange={handleFormData} name="captchaText"></input>
                    </div>
                    <div className="form-group">
                      <input type="text" className="captcha_code" placeholder={GenCaptcha} readOnly></input>
                      <i className="fa fa-recycle"></i>
                    </div>
                  </div>
                  <div className="card-footer">
                    <input type="submit" value="Submit" className="contact-btn"/>
                  </div>
                  
                  {msg.message ? <div className="text-success">
                          {msg.message}
                        </div> : ""}
                        {msg.error ? 
                        <div className="text-danger">
                           {msg.error}
                        </div> : ""}
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
