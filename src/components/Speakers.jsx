import React from "react";
import "../../css/econverse-speakers.css";

import speakerImage1 from "../assets/images/pedro.png";
import speakerImage2 from "../assets/images/eduardo.png";
import speakerImage3 from "../assets/images/tani.png";
import speakerImage4 from "../assets/images/leandro.png";
import speakerImage5 from "../assets/images/carolina.png";

const Speakers = () => {
  const speakers = [
    {
      name: "Pedro Piramo",
      cargo: "CEO da Econverse",
      image: speakerImage1,
    },
    {
      name: "Eduardo Barbosa",
      cargo: "Senior Field Software Engineer da VTEX",
      image: speakerImage2,
    },
    {
      name: "Tani Tjong",
      cargo: "Diretor da Diamante Tintas",
      image: speakerImage3,
    },
    {
      name: "Leandro Heitor",
      cargo: "Líder de Projetos da Econverse",
      image: speakerImage4,
    },
    {
      name: "Carolina Nacle",
      cargo: "Gerente de Parcerias Brasil da Clearsale",
      image: speakerImage5,
    },
  ];

  return (
    <div id="speakers-container">
      <span className="title">SPEAKERS</span>
      <p className="description">
        Estamos animados em contar com um time de especialistas no nosso webinar
        sobre a <strong>JORNADA DE COMPRAS E DIGITALIZAÇÃO</strong> Confira quem vai
        compartilhar insights valiosos:
      </p>

      <div className="speakers">
        {speakers.map((speaker) => (
          <div className="person" key={speaker.name}>
            <img src={speaker.image} alt={speaker.name} />
            <div className="person-info">
              <span>{speaker.name}</span>
              <p>{speaker.cargo}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Speakers;
