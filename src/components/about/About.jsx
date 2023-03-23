import React from "react";
import Aboutimg from "../../assets/about.jpg";
import Aboutinfo from "./Aboutinfo";
import './About.css'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <div className="about_left">
          <img src={Aboutimg} alt="Aboutimg" />
        </div>
        <Aboutinfo />
      </div>
    </section>
  );
};

export default About;
