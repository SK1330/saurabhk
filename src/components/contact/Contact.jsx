import React from "react";
import Contactform from "./Contactform";
import Contactinfo from "./Contactinfo";
import './contact.css'

const Contact = () => {
  return (
    <section className="education section" id="services">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Say Hello</span>

      <div className="contact__container container grid">
        <Contactinfo/>
        <Contactform/>
      </div>
    </section>
  );
};

export default Contact;
