import React, { createRef, useState, useEffect, useContext } from "react";
import {Role, Experience, Skills} from './../Careers/Button'

const JobDescrption = () => {
  const [GenCaptcha, setGenCaptcha] = useState("");
  const [msg, setMsg] = useState("");
  const [role, setRole] = useState("");
  const file = createRef();

  const role1 = useContext(Role);
  useEffect(()=>{
    setRole(role1);
  }, [role])
  
  

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    location: "",
    resume: "",
    captchaText: ""
  });

  let name, value;
  const handleFormData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("firstName", user.firstName);
    formData.set("lastName", user.lastName);
    formData.set("phone", user.phone);
    formData.set("email", user.email);
    formData.set("location", user.location);
    formData.set("experience", user.experience);
    formData.set("resume", file.current.files[0]);
    formData.set("captcha", GenCaptcha);
    formData.set("captchaText", user.captchaText);
    // const { firstName, lastName, email, phone, experience, location, resume } = user;
    // if(!firstName || !lastName || !email || !phone || !experience || !location || !resume){
    //   setErrMsg(true);
    // }

    const res = await fetch("/applyJob", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.status === 422 || data.error) {
      setMsg(data);
      // console.log(msg.error)
    } else {
      console.log(data);
      setMsg(data);
      generate();
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        location: "",
        resume: "",
        captchaText: ""
      });
      generate();
    }
  };

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
      <div className="jobDes">
        <div className="">
          <div className="container common_space jobDesHead">
            <div className="row">
              <div className="col-md-12">
                <h2 className="job_title text-center">{role}....</h2>
              </div>
            </div>
            <div className="jobDesReq">
              <div className="row">
                <div className="col-md-6 content">
                  <h3 className="job_description">Job Description</h3>
                  <h4 className="job_subtitle">ABC</h4>
                  <p className="experience">0-1 Year / 0-1 Opening / Indore</p>
                  <h4 className="job_skills">
                    Skills, Roles, and Responsibilities
                  </h4>
                  <div className="pt-3">
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;
                      <span>
                        Good understanding of SEO process - On Page & Off Page
                      </span>
                    </p>
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;
                      <span>Knowledge of Google Ads (PPC)</span>
                    </p>
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;
                      <span>
                        Knowledge of Google Analytics & Google Webmaster Tools
                      </span>
                    </p>
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;
                      <span>
                        Understanding of Social Media & Content Marketing
                      </span>
                    </p>
                    <p className="job_des_point">
                      <i className="fa fa-check-circle"></i>&nbsp;&nbsp;
                      <span>Good Communication Skills (Written & Verbal)</span>
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
                          <p className="job_details pb-3">
                            To apply for this position please fill your details
                            with your resume.
                          </p>
                        </div>
                        <form
                          onSubmit={postData}
                          method="POST"
                          id="reset"
                          encType="multipat/form-data"
                          className="mb-2"
                        >
                          <div class="form-group">
                            <label>First Name *</label>
                            <input
                              value={user.firstName}
                              type="text"
                              name="firstName"
                              className="form-control"
                              autoComplete="new-password"
                              onChange={handleFormData}
                            />
                          </div>

                          <div class="form-group">
                            <label>Last Name *</label>
                            <input
                              value={user.lastName}
                              type="text"
                              name="lastName"
                              className="form-control"
                              autoComplete="new-password"
                              onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Email *</label>
                            <input
                              value={user.email}
                              type="email"
                              name="email"
                              className="form-control"
                              autoComplete="new-password"
                              onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Phone *</label>
                            <input
                              value={user.phone}
                              type="text"
                              name="phone"
                              className="form-control"
                              autoComplete="new-password"
                              onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Experience in years *</label>
                            <input
                              type="text"
                              value={user.experience}
                              name="experience"
                              className="form-control"
                              autoComplete="new-password"
                              onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Location *</label>
                            <input
                              value={user.location}
                              type="text"
                              name="location"
                              className="form-control"
                              autoComplete="new-password"
                              onChange={handleFormData}
                            />
                          </div>
                          <div class="form-group">
                            <label>Upload Resume Here *</label>
                            <input
                              value={user.resume}
                              type="file"
                              name="resume"
                              className="form-control"
                              autoComplete="new-password"
                              onChange={handleFormData}
                              ref={file}
                            />
                          </div>
                          <div class="form-group">
                            <label>Captcha *</label>
                            <input type="text" 
                            value={user.captchaText}
                            className="form-control" 
                            autoComplete="new-password" 
                            name="captchaText"
                            onChange={handleFormData}
                          ></input>
                          </div>
                          <div className="form-group">
                            <input type="text" className="captcha_code" placeholder={GenCaptcha} readOnly></input>
                            <i className="fa fa-recycle"></i>
                          </div>
                          <div className="card-footer">
                            <input type="submit" className="job-btn" value="Submit"/>
                          </div>
                        </form>

                        {msg.message ? <div className="text-success">
                          {msg.message}
                        </div> : ""}
                        {msg.error ? 
                        <div className="text-danger">
                           {msg.error}
                        </div> : ""}
                      </div>
                      <div className="card-footer"></div>
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
