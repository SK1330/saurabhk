import React from "react";

const Contactinfo = () => {
  return (
    <div className="contact__block">
      <div className="contact__information">
        <i className="uil uil-mobile-android contact__icon"></i>

        <h4 className="contact__information-title">Phone</h4>
        <a href="/" className="contact__subtitle">
          9730095776
        </a>
      </div>

      <div className="contact__information">
        <i className="uil uil-envelope contact__icon"></i>
        <h4 className="contact__information-title">Email</h4>
        <a href="/" className="contact__subtitle">
          skavhar111@gmail.com
        </a>
      </div>

      <div className="contact__information">
        <i className="uil uil-map contact__icon"></i>
        <h4 className="contact__information-title">Location</h4>
        <a href="/" className="contact__subtitle">
          Pune, Maharashtra
        </a>
      </div>
    </div>
  );
};

export default Contactinfo;
