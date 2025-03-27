import React from "react";
import "../../scss/econverse-bannerBottom.scss";

import iconDuration from "../assets/images/background-image.png";

const BottomBanner = () => {

  return (
    <div id="bannerBottom-container" style={{ backgroundImage: `url(${iconDuration})` }}>
      <span>Participe <br/> do evento!</span>
      <p>Chegou a hora de impulsionar a jornada digital do seu negócio! Inscreva-se agora e descubra como transformar resultados e levar seu e-commerce ao próximo nível.
      </p>
      <a className="link" href="/#form-container">INSCREVER!</a>

    </div>
  );
};

export default BottomBanner;
