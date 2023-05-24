import React, { useState } from "react";

const ContactHome = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [contactHomeData, setcontactHomeData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  let name, value;
  const handleFormData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setcontactHomeData({ ...contactHomeData, [name]: value });
    // console.log(contactHomeData);
  };

  const sendContactHomeData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("fullName", contactHomeData.fullName);
    formData.set("email", contactHomeData.email);
    formData.set("message", contactHomeData.message);

    const res = await fetch("/contactHome", {
      method: "post",
      body: formData,
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert(data.message);
    } else {
      console.log(data);
      setSuccessMsg(data.message);
      alert(data.message);
      setcontactHomeData({
        fullName: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <div>
      <div className="contact_section">
        <div className="container">
          <h2 className="contact_title text-center">Have a Project or Idea?</h2>
          <p className="contactsubtitle text-center pt-2">
            We will love to build something great together
          </p>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="card contact_card">
                <div className="card-body">
                  <form method="POST" onSubmit={sendContactHomeData}>
                    <div className="row pt-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="fullName"
                          value={contactHomeData.fullName}
                          className="form-control contact_field mb-3"
                          autoComplete="new-password"
                          placeholder="Your Name"
                          onChange={handleFormData}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          name="email"
                          value={contactHomeData.email}
                          className="form-control contact_field"
                          autoComplete="new-password"
                          placeholder="Your Email"
                          onChange={handleFormData}
                        />
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-md-12">
                        <textarea
                          className="form-control contact_field"
                          rows="5"
                          name="message"
                          value={contactHomeData.message}
                          placeholder="Message"
                          onChange={handleFormData}
                        ></textarea>
                      </div>
                    </div>
                    <h6 className="pt-5 captcha">CAPTCHA</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name=""
                        className="form-check-input"
                      />
                      <label className="form-check-label">
                        By submitting the form, I agree to the privacy policy
                        and give my consent to receive emails/phone.
                      </label>
                    </div>
                    <div className="text-center pt-5">
                      <input
                        type="submit"
                        className="btn btn-primary rounded"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactHome;
