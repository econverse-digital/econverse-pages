import React from "react";
import "../../src/assets/styles/econverse-about.scss";

import ScrollToSection from "./ScrollButton";

import backgroundText from "../assets/images/about-section-background-text.png";
import backgroundTextMob from "../assets/images/about-section-background-text-mob.png";

const About = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div id="about-container" style={{ backgroundImage: !isMobile ? `url(${backgroundText})` : `url(${backgroundTextMob})` }} >
      
      <div className="about-content" >
        
        <div className="left-side">
          <span>Sobre o Webinar</span>
          <p>
            <strong>Omnicanalidade e o futuro da experiência do cliente</strong>{" "}
          </p>
        </div>

        <div className="right-side">
          <p className="about-text">
            Participe do nosso webinar exclusivo no{" "}
            <strong>dia 13 de maio, às 19h,</strong> e descubra como a omnicanalidade está transformando a experiência do cliente. Em parceria com <strong>Banban Calçados</strong> e <strong>Neomode</strong>, vamos explorar as melhores estratégias para integrar canais, <strong>otimizar a jornada de compra</strong> e aproveitar as <strong>oportunidades desse mercado em constante evolução</strong>. Não perca essa chance de se atualizar com especialistas do setor!
          </p>
          <ScrollToSection
            text="Quero participar!"
            sectionId="form-full-container"
            background="#9F7BF5"
            color="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
