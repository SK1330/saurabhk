import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <a href="#home" className="nav__logo_footer footer__title">
            Saurabh
          </a>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/skavhar/"
              className="footer__social"
            >
              <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/SK1330" className="footer__social">
              <i className="uil uil-github"></i>
            </a>

            <a
              href="https://dribbble.com/starboy_13"
              className="footer__social"
            >
              <i className="uil uil-dribbble"></i>
            </a>
          </div>

          <p className="footer__copy">© 2023 Copyright Saurabh Kavhar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
