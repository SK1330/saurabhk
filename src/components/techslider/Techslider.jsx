import React from "react";
import htmlimage from "../../assets/html.svg";
import cssimage from "../../assets/css.svg";
import javascriptimage from "../../assets/bootstrap.svg";
import reactimage from "../../assets/angular.svg";
import './Techslider.css'

const Techslider = () => {
  return (
    <div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={htmlimage} alt="" />
          </div>
          <div className="slide">
            <img src={cssimage} alt="" />
          </div>
          <div className="slide">
            <img src={javascriptimage} alt="" />
          </div>
          <div className="slide">
            <img src={reactimage} alt="" />
          </div>
          <div className="slide">
            <img src={htmlimage} alt="" />
          </div>
          <div className="slide">
            <img src={cssimage} alt="" />
          </div>
          <div className="slide">
            <img src={javascriptimage} alt="" />
          </div>
          <div className="slide">
            <img src={reactimage} alt="" />
          </div>
          <div className="slide">
            <img src={htmlimage} alt="" />
          </div>
          <div className="slide">
            <img src={cssimage} alt="" />
          </div>
          <div className="slide">
            <img src={javascriptimage} alt="" />
          </div>
          <div className="slide">
            <img src={reactimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techslider;
