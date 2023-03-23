import React from "react";
import "./home.css";
import Homecontent from "./Homecontent";
import Techstack from "./Techstack";

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__img"></div>
          <Homecontent />
        </div>
        <Techstack />
      </div>
      
    </section>
  );
};

export default Home;
