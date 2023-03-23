import React from "react";
import designIcon from "../../assets/design.svg";
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
          <h4 className="service-heading">Creative Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidid labore dolore magna.
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">02</p>
          <img src={designIcon} alt="" />
          <h4 className="service-heading">Creative Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidid labore dolore magna.
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">03</p>
          <img src={designIcon} alt="" />
          <h4 className="service-heading">Creative Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidid labore dolore magna.
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">04</p>
          <img src={designIcon} alt="" />
          <h4 className="service-heading">Creative Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidid labore dolore magna.
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">05</p>
          <img src={designIcon} alt="" />
          <h4 className="service-heading">Creative Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidid labore dolore magna.
          </p>
        </div>
        <div className="service-box bg-white">
          <p className="service-number color-blue">06</p>
          <img src={designIcon} alt="" />
          <h4 className="service-heading">Creative Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidid labore dolore magna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
