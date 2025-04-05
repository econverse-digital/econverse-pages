import React from "react";
import "../../src/assets/styles/econverse-topics.scss";

import iconDuration from "../assets/svg/icon-duration.svg";
import iconPlay from "../assets/svg/icon-play.svg";
import ScrollToSection from "./ScrollButton";

const Topics = () => {
  const isMobile = window.innerWidth < 768;

  const topics = [
    {
      number: "#1",
      title: "A evolução da jornada do cliente:",
      description:
        "Como a omnicanalidade impacta a decisão de compra e a fidelização.",
      duration: "20 Min",
    },
    {
      number: "#4",
      title: "Tendências e inovação no varejo:",
      description:
        "O que esperar do futuro e como se preparar para as transformações do mercado.",
      duration: "20 Min",
    },
    {
      number: "#2",
      title: "Integração perfeita entre canais físicos e digitais:",
      description:
        "Como unificar o estoque das lojas físicas com o e-commerce e marketplaces.",
      duration: "20 Min",
    },
    {
      number: "#5",
      title: "Personalização e Engajamento no Case da Banban Calçados",
      description:
        "Descubra estratégias e aprendizados que elevaram a experiência do cliente, fortalecendo retenção e fidelização.",
      duration: "20 Min",
    },
    {
      number: "#3",
      title: "Tecnologia a favor do varejo:",
      description:
        "Como plataformas omnichannel, como a Neomode, podem revolucionar a operação do seu negócio.",
      duration: "20 Min",
    },
    {
      number: "#6",
      title: "Logística e fulfillment no omnichannel:",
      description:
        "Estratégias para tornar as entregas mais ágeis e eficientes.",
      duration: "20 Min",
    },
  ];

  return (
    <div id="topics-container">

      <span class="title">O que você irá aprender</span>

      <div className="topics">
        {topics.map((topics) => (

          <div className="topic">
            {!isMobile && <p className="number">
              {topics.number}
            </p>}
            
            <div className="description-container">

              {isMobile && (
                <>
                  <p className="number">
                    {topics.number}
                  </p>
                  <div>
                    <h3 className="title">{topics.title}</h3>
                    <p className="description" dangerouslySetInnerHTML={{ __html: topics.description }} ></p>
                  </div>
                </>
              )}

              {!isMobile && (
                <>
                  <h3 className="title">{topics.title}</h3>
                  <p className="description" dangerouslySetInnerHTML={{ __html: topics.description }} ></p>
                </>
              )}


            </div>
          </div>
        ))}
      </div>

      <div className="duration-container">
        <div className="duration-time">
          <img src={iconDuration} alt="Icone de duração" />
          <p className="duration-text">Duração da webinar: <strong>1h</strong></p>
        </div>
        <div className="duration-link">
          <img src={iconPlay} alt="Icone de duração" />
          <p className="duration-text">Transmissão: <strong>Youtube</strong></p>
        </div>
      </div>

      <ScrollToSection text="GARANTA SUA VAGA" sectionId="form-full-container" background="#9F7BF5" color="#fff" />
    </div>
  );
};

export default Topics;
