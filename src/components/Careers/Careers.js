import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import interview from "./images/job-interview-in-career.png";
import bitbyteCul from "./images/BitByte_Culture.jpg";
import bitbyteLead from "./images/BitByte_Leadership.png";
import learning from "./images/Learning&Opportunity.jpg";
import Button from "./Button";

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = () => {
    fetch("/job")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        setJobs(res);
      });
  };

  return (
    <>
      <div className="careers">
        <div className="diagonal-box bg-one">
          <div className="container common_space careerSec1">
            <div className="row ">
              <div className="col-md-6 content">
                <h2>CAREERS</h2>
                <p>
                  Join BitByte as a IT services leader that will engage your
                  mind, inspire your creativity and develop your career
                </p>
              </div>
              <div className="col-md-6 img">
                <img src={interview} alt="" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="fullFill">
          <div className="container common_space careerSec2">
            <div className="row ">
              <div className="col-md-12 content text-center">
                <h2>START THE FULFILLING CAREER WITH BITBYTE</h2>
                <p>
                  At BitByte we work on challenging and innovative projects
                  which push our teams to deliver the best that they can. Do you
                  show the same determination, whether you're doing something
                  simple or something completely out of ordinary? If so, join
                  us!
                </p>
              </div>
              <div className="col-md-6 img">
                <img src={bitbyteCul} alt="" className="img-fluid"></img>
              </div>
              <div className="col-md-6 content2">
                <h3>BitByte Culture</h3>
                <p>
                  BitByte culture is created every day by all of the
                  self-motivated, committed professionals who work here. Our
                  core values are important to us and expressed in the way we
                  work with each other and with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="leadership">
          <div className="container common_space careerSec3">
            <div className="row ">
              <div className="col-md-6 content career_order1">
                <h3>BitByte Leadership</h3>
                <p>
                  BitByte proficient leadership team guides the company with a
                  steadfast commitment to quality excellence and core values.
                  The solidarity of our approach is visible in our actions as we
                  aim towards perfection and brilliance in our solutions and
                  service delivery.
                </p>
              </div>
              <div className="col-md-6 img career_order2">
                <img src={bitbyteLead} alt="" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="learning">
          <div className="container common_space careerSec4">
            <div className="row ">
              <div className="col-md-6 img">
                <img src={learning} alt="" className="img-fluid"></img>
              </div>
              <div className="col-md-6 content">
                <h3>Learning & Opportunities</h3>
                <p>
                  We encourage technical training and certifications to expose
                  you to best practices in the industry. We focus on nurturing
                  people skills to give best performance at work. We encourage
                  and support work-life balance
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="joinTeam">
          <div className="container common_space careerSec5">
            <div className="col-md-12 content">
              <h2>Join Our Team</h2>
              <h4>Current Opportunities</h4>
              <h5>
                What are you waiting for? Start your future with BitByte today.
              </h5>
            </div>
            <div className="container-fluid col-md-12 cardSec pt-5">
              <div className="row">
                {jobs.map((job) => {
                  return (
                    <div className="col-md-4 pt-2">
                      <div className="card">
                        <div className="card-body">
                          <p className="role">{job.jobRole}</p>
                          <p className="divider"></p>
                          <br />
                          <p>Desired Experience</p>
                          <p>0-{job.experience} year</p>
                        </div>
                        <div className="card-footer">
                          <Link to='/jobdescription'>
                            <Button role={job.jobRole} experience={job.experience} skills={job.skills}/>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
