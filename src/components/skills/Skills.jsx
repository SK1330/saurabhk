import React from "react";
import "./Skills.css";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/icons8-css3.svg";
import javaScriptIcon from "../../assets/icons8-javascript.svg";
import ReactIcon from "../../assets/icons8-react-native.svg";
import tailwindIcon from "../../assets/icons8-tailwind-css.svg";
// import bootstrapIcon from '../../assets/icons8-bootstrap.svg';
import awsIcon from "../../assets/icons8-amazon-web-services.svg";
import jenkinsIcon from "../../assets/icons8-jenkins.svg";
import dockerIcon from "../../assets/icons8-docker.svg";
import gitIcon from "../../assets/icons8-git.svg";
import terminalIcon from "../../assets/icons8-linux-terminal.svg";
import ansibleIcon from "../../assets/icons8-ansible.svg";
import figmaIcon from "../../assets/icons8-figma.svg";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Skillset</span>

      <div className="skills__container container grid">
        <ul className="skills_grid">
          <li className="skills-grid-item ">
            <img className="skillIcons" src={htmlIcon} alt="html5 logo" />
            <h3 className="skills_title">HTML 5</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={cssIcon} alt="" />
            <h3 className="skills_title">CSS 3</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={javaScriptIcon} alt="" />
            <h3 className="skills_title">javaScript</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={ReactIcon} alt="" />
            <h3 className="skills_title">React Js</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={tailwindIcon} alt="" />
            <h3 className="skills_title">Tailwind</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={figmaIcon} alt="" />
            <h3 className="skills_title">Figma</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={awsIcon} alt="" />
            <h3 className="skills_title">AWS</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={gitIcon} alt="" />
            <h3 className="skills_title">Git</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={jenkinsIcon} alt="" />
            <h3 className="skills_title">Jenkins</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={dockerIcon} alt="" />
            <h3 className="skills_title">Docker</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={ansibleIcon} alt="" />
            <h3 className="skills_title">Ansible</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={terminalIcon} alt="" />
            <h3 className="skills_title">Linnux</h3>
          </li>
        </ul>
      </div>

      <div className="skills__container container grid mobile">
        <ul className="skills_grid">
          <li className="skills-grid-item ">
            <img className="skillIcons" src={htmlIcon} alt="html5 logo" />
            <h3 className="skills_title">HTML 5</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={cssIcon} alt="" />
            <h3 className="skills_title">CSS 3</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={javaScriptIcon} alt="" />
            <h3 className="skills_title">javaScript</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={ReactIcon} alt="" />
            <h3 className="skills_title">React Js</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={tailwindIcon} alt="" />
            <h3 className="skills_title">Tailwind</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={figmaIcon} alt="" />
            <h3 className="skills_title">Figma</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={awsIcon} alt="" />
            <h3 className="skills_title">AWS</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={gitIcon} alt="" />
            <h3 className="skills_title">Git</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={jenkinsIcon} alt="" />
            <h3 className="skills_title">Jenkins</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={dockerIcon} alt="" />
            <h3 className="skills_title">Docker</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={ansibleIcon} alt="" />
            <h3 className="skills_title">Ansible</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={terminalIcon} alt="" />
            <h3 className="skills_title">Linnux</h3>
          </li>
        </ul>
        <ul className="skills_grid left-right">
          
         
          

          <li className="skills-grid-item ">
            <img className="skillIcons" src={terminalIcon} alt="" />
            <h3 className="skills_title">Linux</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={ansibleIcon} alt="" />
            <h3 className="skills_title">Ansible</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={dockerIcon} alt="" />
            <h3 className="skills_title">Docker</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={jenkinsIcon} alt="" />
            <h3 className="skills_title">Jenkins</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={gitIcon} alt="" />
            <h3 className="skills_title">Git</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={awsIcon} alt="" />
            <h3 className="skills_title">AWS</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={figmaIcon} alt="" />
            <h3 className="skills_title">Figma</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={tailwindIcon} alt="" />
            <h3 className="skills_title">Tailwind</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={ReactIcon} alt="" />
            <h3 className="skills_title">React Js</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={javaScriptIcon} alt="" />
            <h3 className="skills_title">javaScript</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={cssIcon} alt="" />
            <h3 className="skills_title">CSS 3</h3>
          </li>
          <li className="skills-grid-item ">
            <img className="skillIcons" src={htmlIcon} alt="html5 logo" />
            <h3 className="skills_title">HTML 5</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
