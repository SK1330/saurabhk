import React from "react";
import htmlimage from "../../assets/html.svg";
import cssimage from "../../assets/css.svg";
import javascriptimage from "../../assets/icons8-javascript.svg";
import reactimage from "../../assets/icons8-react-native.svg";
import figmaImage from "../../assets/icons8-figma.svg"
import bootstrapImage from "../../assets/icons8-bootstrap.svg"

const Techstack = () => {
  return (
    <div className="short_skills">
      <div className="text">
        <span>
          Tech Stack
        </span>
      </div>
      <div className="short_skills_icons">
        <ul>
          <li>
            <img className="svg" src={htmlimage} alt="html" />
          </li>
          <li>
            <img className="svg" src={cssimage} alt="cssimage" />
          </li>
          <li>
            <img className="svg" src={javascriptimage} alt="javascriptimage" />
          </li>
          <li>
            <img className="svg" src={reactimage} alt="reactimage" />
          </li>
          <li>
            <img className="svg" src={bootstrapImage} alt="bootstrapimage" />
          </li>
          <li>
            <img className="svg" src={figmaImage} alt="figmaimage" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Techstack;
