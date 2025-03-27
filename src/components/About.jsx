import React from "react";
import "../../scss/econverse-about.scss";

import ScrollToSection from "./ScrollButton";

const About = () => {
  return (
    <div id="about-container">
      <div className="about-content">
        <div className="left-side">
          <span>SOBRE 0 WEBINAR</span>
          <p>O impacto da indústria <br/> de <strong>cosméticos no digital</strong> </p>
        </div>

        <p className="about-text">
          Participe do nosso webinar exclusivo no <strong>dia  20 de fevereiro, às 19h</strong> e mergulhe no 
          universo da indústria de cosméticos no digital. Este evento é uma oportunidade 
          única para entender como <strong>construir um e-commerce de sucesso,</strong> acompanhar 
          as melhores estratégias de comunicação e explorar os desafios e oportunidades que 
          este mercado em constante evolução oferece.
        </p>
      </div>

      <ScrollToSection text="Inscreva-se agora!" sectionId="form-full-container" background="#ede4c0" color="#181818" />
    </div>
  );
};

export default About;
