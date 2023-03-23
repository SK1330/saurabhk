import React from "react";

const Aboutinfo = () => {
  return (
    <div className="about_right">
      <div className="about_info_title">
        <span>About Me</span>
        <h3>A dedicated Front-End Developer based In Maharashtra, India</h3>
      </div>
      <div className="text">
        <p>
          As a Front-End Developer, I possess an impressive arsenal of skills in
          HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing
          and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>


      <div className="about_buttons">
        <div className="about_info_button button">
          <a href="#contact">Say Hello</a>
        </div>
        <div className="about_info_download_button button">
          <a href="/">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Aboutinfo;
