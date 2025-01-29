import React from "react";
import "../../css/econverse-speakers.css";

import speakerImage1 from "../assets/images/dudah.png";
import speakerImage2 from "../assets/images/anne.png";
import speakerImage3 from "../assets/images/fernando.png";
import speakerImage4 from "../assets/images/andre.png";

const Speakers = () => {
  const speakers = [
    {
      name: "<strong>duda</strong> reis",
      cargo: "CEO e Founder da DUDAH! Beauty",
      image: speakerImage1,
    },
    {
      name: "<strong>ANNE</strong> ABREU",
      cargo: "COO e Founder da DUDAH! Beauty",
      image: speakerImage2,
    },
    {
      name: "<strong>Fernando</strong> amorim",
      cargo: "Partner e COO da Econverse",
      image: speakerImage3,
    },
    {
      name: "<strong>andré</strong> viana",
      cargo: "Diretor Comercial da wake",
      image: speakerImage4,
    },
  ];

  return (
    <div id="speakers-container">
      <span className="title">lineup</span>
      <p className="description">
        Não perca esta oportunidade de se conectar com especialistas do mercado digital, explorar os 
        bastidores do grande case da marca DUDAH! Beauty e descobrir estratégias para elevar sua presença 
        online a um novo nível!
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
