import React from "react";
import "../../scss/econverse-footer.scss";

import glassDoorImage from "../assets/images/glassdoor-image.png";
import linkedinIcon from "../assets/svg/icon-linkedin.svg";
import facebookIcon from "../assets/svg/icon-facebook.svg";
import instagramIcon from "../assets/svg/icon-instagram.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="top-content">
        <img className="glassdoor-icon" src={glassDoorImage} alt="Icone Glassdoor" />

        <p>
          <strong>Endereço:</strong> <br/>
          Avenida das Nações Unidas, 13797,<br/> Bloco 2, 20 Andar - São
          Paulo
        </p>

        <p>
          +55 11 91914‑9870
          <br />
          contato@econverse.com.br
        </p>

        <div className="social-icons">

          <a href="https://www.linkedin.com/company/econverse/">
            <img src={linkedinIcon} alt="Linkedin Icon" />
            Linkedin
          </a>

          <a href="https://www.instagram.com/econverse.ag/">
            <img src={instagramIcon} alt="Instagram Icon" />
            Instagram
          </a>

          <a href="https://www.facebook.com/agenciaeconverse">
            <img src={facebookIcon} alt="Facebook Icon" />
            Facebook
          </a>

        </div>

      </div>

      <div className="bottom-content">
        <p>© 2025 Econverse - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
