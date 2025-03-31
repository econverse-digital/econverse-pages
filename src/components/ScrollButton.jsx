import React from "react";

import "../../src/assets/styles/econverse-scroll-to-section.scss";

const ScrollToSection = ({ text, sectionId, background, color }) => {
  const handleClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className="cta"

      style={{ background: background, color: color }}
    >
      {text}
    </button>
  );
};

export default ScrollToSection;
