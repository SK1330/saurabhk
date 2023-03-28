import React from "react";
import designIcon from "../../assets/design.svg";
import webdevIcon from "../../assets/code.svg";
import ReactIcon from "../../assets/icons8-react-dark.svg";
import wordpressIcon from "../../assets/icons8-wordpress.svg";
import brandingIcon from "../../assets/icons8-branding-66.png";
import devopsIcon from "../../assets/icons8-services.svg";
import "./Services.css";



const Services = () => {
  return (
    <section className="service section" id="services">
      <h2 className="section__title">What I Offer</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="service__container container grid">
        <div className="service-box bg-white">
          <p className="service-number color-blue">01</p>
          <img src={designIcon} alt="" />
          <h4 className="service-heading">UI/UX Design</h4>
          <p>
            I develop the User Interfaces by following User-Centered designing
            apporach to solve the user problems and growth of organization.
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">02</p>
          <img src={webdevIcon} alt="" />
          <h4 className="service-heading">Web Development</h4>
          <p>
            Develope website with high quality and completely responsive user
            interfaces using Html, Css, javaScript, React etc.
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">03</p>
          <img src={ReactIcon} alt="" />
          <h4 className="service-heading">React.js Dev</h4>
          <p>
            Build high-performing web applications interactive UIs and
            impressive web applications that attract users with React.js
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">04</p>
          <img src={wordpressIcon} alt="" />
          <h4 className="service-heading">Wordpress Dev</h4>
          <p>
            I am specialize in building websites with WordPress. Experienced in
            developing static as well as dyanmic website in WordPress.
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">05</p>
          <img src={brandingIcon} alt="" />
          <h4 className="service-heading">Branding</h4>
          <p>
            I provide services like Logo Design, Graphic design, Banner Design,
            for Brand Identity
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">06</p>
          <img src={devopsIcon} alt="" />
          <h4 className="service-heading">DevOps Services</h4>
          <p>
            I offer comprehensive DevOps professional services using multiple devops tools and Amazon cloud services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
