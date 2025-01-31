import React from "react";
import "../../css/econverse-topics.css";
import iconDuration from "../assets/svg/icon-duration.svg";
import iconPlay from "../assets/svg/icon-play.svg";
import iconStar from "../assets/svg/star.svg";
import ScrollToSection from "./ScrollButton";

const Topics = () => {
  const isMobile = window.innerWidth < 768;

  const topics = [
    {
      number: "#1",
      title: "Concepção da marca e o impacto dos parceiros estratégicos:",
      description:
        "Descubra a história por trás da criação da DUDAH! Beauty e aprenda como a escolha dos parceiros certos pode impulsionar significativamente seus resultados no e-commerce, potencializando o crescimento e a inovação da sua marca.",
      duration: "20 Min",
    },
    {
      number: "#2",
      title: "Passo a passo para projetos digitais de sucesso e construção de um site de referência:",
      description:
        "Aprenda como planejar, implementar e evoluir iniciativas digitais para garantir alta performance e crescimento sustentável, como fez a DUDAH! Beauty. Descubra como a marca construiu uma plataforma digital alinhada com design impactante, funcionalidade eficiente e uma experiência de usuário excepcional.",
      duration: "20 Min",
    },
    {
      number: "#3",
      title: "Conexão com o cliente através do CRM:",
      description:
        "Explore como um plano de comunicação bem estruturado e o uso estratégico de ferramentas de CRM podem fortalecer relações, fidelizar clientes e alavancar vendas.",
      duration: "20 Min",
    },
    {
      number: "#4",
      title: "Inovação no mercado de cosméticos:",
      description:
        "Descubra as tendências tecnológicas que estão moldando o futuro do setor, como personalização e integração de novas tecnologias.",
      duration: "20 Min",
    },
  ];

  return (
    <div id="topics-container">
      <span>O QUE você IRÁ APRENDER?</span>

      <div className="topics">
        {topics.map((topics) => (
          <div className="topic">
            {!isMobile && <p className="number">
              <img src={iconStar} alt="star"/>
              <span>{topics.number}</span>
            </p>}
            
            <div className="description-container">
              {isMobile && (
                <div>
                  <p className="number">
                    <img src={iconStar} alt="star"/>
                    <span>{topics.number}</span>
                  </p>
                  <h3 className="title">{topics.title}</h3>
                </div>
              )}

              {!isMobile && (
                <h3 className="title">{topics.title}</h3>
              )}

              <p className="description" dangerouslySetInnerHTML={{ __html: topics.description }} ></p>

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

      <ScrollToSection text="Quero participar!" sectionId="form-full-container" background="#181818" color="#ede4c0" />
    </div>
  );
};

export default Topics;
