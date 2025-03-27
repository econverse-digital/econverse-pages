import React from "react";
import "../../scss/econverse-home.scss";

import bannerImage from "../assets/images/banner-event-desk-cta.png";
import bannerImageMob from "../assets/images/banner-event-mob-cta.png";

import Form from "../components/Form.jsx";
import About from "../components/About.jsx";
import Speakers from "../components/Speakers.jsx";
import Topics from "../components/Topics.jsx";
import FormFull from "./FormFull.jsx";
// import BottomBanner from "../components/BottomBanner.jsx";

const Home = () => {
  const isMobile = window.innerWidth < 768;
  
  return (
    <div id="home">

      <a href="/#form-full-container">
        <img src={isMobile ? bannerImageMob : bannerImage} alt="Banner Jornada de compras" />
      </a>
    
      <FormFull/>
      <About />
      <Topics />
      <Speakers />
      <Form />
    </div>
  );
};

export default Home;
