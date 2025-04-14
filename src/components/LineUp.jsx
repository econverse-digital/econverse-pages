import React from "react";

import "../../src/assets/styles/econverse-lineup.scss";

import speakerImage1 from "../assets/images/bianca-jardim.png";
import speakerImage2 from "../assets/images/fabiola-paes.png";
import speakerImage3 from "../assets/images/joao-vitor.png";
import speakerImage4 from "../assets/images/tammy-melo.png";

import background from "../assets/images/webnar-omnicanalidade-background-black.png";
import backgroundMobile from "../assets/images/webnar-omnicanalidade-background-black-mob.png";

import circleBackground from "../assets/images/webnar-omnicanalidade-circle.png";

const Lineup = () => {
  const lineup = [
    {
      name: "<strong>bianca jardim</strong>",
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
    <div id="lineup-container" style={{
      backgroundImage: `url(${
        window.innerWidth <= 768 ? backgroundMobile : background
      })`,
    }}>

      <div className="content">

        <span className="title">Line Up</span>

        <div className="lineup-container">

          <div className="lineup">
            {lineup.map((speaker) => (
              <div className="person" key={speaker.name}>
                <img src={speaker.image} alt={speaker.name} />
                <span dangerouslySetInnerHTML={{ __html: speaker.name }}/>
                <p dangerouslySetInnerHTML={{ __html: speaker.cargo }}/>
              </div>
            ))}
          </div>

          <div className="text">

            <p>Tenha acesso a <strong>atualizações do mercado</strong>, <strong>especialistas de peso</strong> e <strong>conteúdos exclusivos</strong> que podem transformar sua jornada.</p>

            <a href="/">FAÇA SUA INSCRIÇÃO</a>
          </div>

        </div>

      </div>


    </div>
  );
};

export default Lineup;
