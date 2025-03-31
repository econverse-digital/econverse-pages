import React from "react";

// import "../../scss/econverse-speakers.scss"

import "../../src/assets/styles/econverse-speakers.scss";

import speakerImage1 from "../assets/images/bianca-jardim.png";
import speakerImage2 from "../assets/images/fabiola-paes.png";
import speakerImage3 from "../assets/images/joao-vitor.png";
import speakerImage4 from "../assets/images/tammy-melo.png";

import background from "../assets/images/speakers-bg.png";
import backgroundMobile from "../assets/images/speakers-bg-mob.png";

const Speakers = () => {
  const speakers = [
    {
      name: "<strong>bianca jardim</strong> reis",
      cargo: "Diretora Comercial na Econverse",
      image: speakerImage1,
    },
    {
      name: "<strong>Fabíola Paes</strong>",
      cargo: "Co Founder Neomode",
      image: speakerImage2,
    },
    {
      name: "<strong>João Victor </strong>",
      cargo: "Head de TI na Econverse",
      image: speakerImage3,
    },
    {
      name: "<strong>Tammy Melo</strong>",
      cargo: "Gerente de Marketing, trade e e-commerce na Banban Calçados",
      image: speakerImage4,
    },
  ];

  return (
    <div id="speakers-container" style={{
      backgroundImage: `url(${
        window.innerWidth <= 768 ? backgroundMobile : background
      })`,
    }}>

      <div className="content">

        <span className="title">Line Up</span>

        <div className="speakers-container">

          <div className="speakers">
            {speakers.map((speaker) => (
              <div className="person" key={speaker.name}>
                <img src={speaker.image} alt={speaker.name} />
                <span dangerouslySetInnerHTML={{ __html: speaker.name }}/>
                <p dangerouslySetInnerHTML={{ __html: speaker.cargo }}/>
              </div>
            ))}
          </div>

          <div className="text">

            <p><strong>Não perca essa discussão essencial!</strong><br/>Descubra como a omnicanalidade está transformando a experiência do cliente, explore o case de sucesso da Banban Calçados e veja como a Neomode integra canais para otimizar a jornada de compra.</p>

            <a href="/">Participe já</a>
          </div>

        </div>

      </div>


    </div>
  );
};

export default Speakers;
