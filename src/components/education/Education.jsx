import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education section" id="services">
      <h2 className="section__title">Experience & Education</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="education__container container grid">
        <div className="timelineLeft">
          <div className="timeline-item">
            <p className="timeline-title">Jan 2022 - Present</p>
            <div className="timeline-text">
              <h5>Web Developer</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="timeline-title">Nov 2020 - Dec 2021</p>
            <div className="timeline-text">
              <h5>Frontend Developer</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="timeline-title">March 2020 - Nov 2020</p>
            <div className="timeline-text">
              <h5>Jr. Frontend Developer</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
        </div>
        <div className="timelineRight">
          <div className="timeline-item">
            <p className="timeline-title">2020- 2022</p>
            <div className="timeline-text">
              <h5>M.B.A Marketing</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="timeline-title">2015 - 2020</p>
            <div className="timeline-text">
              <h5>B.E( IT )</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="timeline-title">2013 - 2015</p>
            <div className="timeline-text">
              <h5> XII</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
