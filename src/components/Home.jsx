import React from "react";
import "../../css/econverse-home.css";

import bannerImage from "../assets/images/banner-event-desk.png";
import bannerImageMob from "../assets/images/banner-event-mob.png";

import Form from "../components/Form.jsx";
import About from "../components/About.jsx";
import Speakers from "../components/Speakers.jsx";
import Topics from "../components/Topics.jsx";
// import BottomBanner from "../components/BottomBanner.jsx";

const Home = () => {
  const isMobile = window.innerWidth < 768;
  
  return (
    <div id="home">

      <a href="/#form-container">
        <img src={isMobile ? bannerImageMob : bannerImage} alt="Banner Jornada de compras" />
      </a>
      <Form />
      <About />
      <Topics />
      <Speakers />
      <Form />
    </div>
  );
};

export default Home;
