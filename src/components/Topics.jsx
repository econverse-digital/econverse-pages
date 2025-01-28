import React from "react";
import "../../css/econverse-topics.css";
import iconDuration from "../assets/images/icon-duration.png";

const Topics = () => {
  const isMobile = window.innerWidth < 768;

  const topics = [
    {
      number: "#1",
      title: "Jornada de compras: Digitalização da operação no e-commerce",
      description:
        "Saiba como conectar todos os pontos da jornada do cliente e criar uma experiência omnichannel impecável. A <strong>Diamante Tintas</strong> compartilhará sua experiência de digitalização, revelando os desafios superados, as soluções adotadas e os resultados que impulsionaram seu negócio.",
      duration: "20 Min",
    },
    {
      number: "#2",
      title: "Soluções de segurança e infraestrutura",
      description:
        "Segurança e performance são essenciais para o sucesso de qualquer e-commerce. Com a <strong>ClearSale</strong>, você aprenderá como proteger sua operação com soluções avançadas de antifraude. E a <strong>VTEX</strong> trará insights sobre como uma infraestrutura sólida pode garantir escalabilidade, estabilidade e crescimento sustentável.",
      duration: "20 Min",
    },
    {
      number: "#3",
      title: "Soluções práticas e cases",
      description:
        "Nada melhor do que aprender com quem fez acontecer! Nossos especialistas apresentarão cases reais, com soluções práticas que você pode aplicar no seu negócio para transformar desafios em oportunidades e potencializar resultados.",
      duration: "20 Min",
    },
  ];

  return (
    <div id="topics-container">
      <span>O que você irá aprender:</span>

      <div className="topics">
        {topics.map((topics) => (
          <div className="topic">
            {!isMobile && <p className="number">{topics.number}</p>}

            <div className="description-container">
              {isMobile && (
                <div>
                  <p className="number">{topics.number}</p>
                  <h3 className="title">{topics.title}</h3>
                </div>
              )}

              {!isMobile && (
                <h3 className="title">{topics.title}</h3>
              )}
              
              <p className="description" dangerouslySetInnerHTML={{ __html: topics.description }} ></p>

            </div>
            <div className="duration-container">
              <img src={iconDuration} alt="Icone de duração" />
              <p className="duration">{topics.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
