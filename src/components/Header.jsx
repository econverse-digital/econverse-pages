import React, { useState } from "react";
import "../../css/econverse-header.css";

const Header = () => {
  const isMobile = window.innerWidth < 768;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">

     { isMobile ? (
        <>
          <a href="https://www.econverse.com.br/">
            <img
              src="https://www.econverse.com.br/wp-content/uploads/2024/01/Logo-para-fundo-claro.png"
              alt="Logo Econverse"
            />
          </a>
          
          <a className="contact-button" href="https://www.econverse.com.br/contato/">
            Fale Conosco
          </a>

          <button
            className={showMenu ? "menu-button active" : "menu-button"}
            onClick={() => setShowMenu(!showMenu)}
          >
            {!showMenu ? (
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.91573 8.18689H21.9237C22.3237 8.18689 22.6717 8.03889 22.9677 7.74289C23.2637 7.44689 23.4117 7.09889 23.4117 6.69889C23.4117 6.29889 23.2637 5.94689 22.9677 5.64289C22.6717 5.33889 22.3237 5.18689 21.9237 5.18689H2.91573C2.51573 5.18689 2.16773 5.33889 1.87173 5.64289C1.57573 5.94689 1.42773 6.29889 1.42773 6.69889C1.42773 7.09889 1.57573 7.44689 1.87173 7.74289C2.16773 8.03889 2.51573 8.18689 2.91573 8.18689ZM2.91573 14.1869H21.9237C22.3237 14.1869 22.6717 14.0389 22.9677 13.7429C23.2637 13.4469 23.4117 13.0989 23.4117 12.6989C23.4117 12.2989 23.2637 11.9469 22.9677 11.6429C22.6717 11.3389 22.3237 11.1869 21.9237 11.1869H2.91573C2.51573 11.1869 2.16773 11.3389 1.87173 11.6429C1.57573 11.9469 1.42773 12.2989 1.42773 12.6989C1.42773 13.0989 1.57573 13.4469 1.87173 13.7429C2.16773 14.0389 2.51573 14.1869 2.91573 14.1869ZM2.91573 20.1869H21.9237C22.3237 20.1869 22.6717 20.0389 22.9677 19.7429C23.2637 19.4469 23.4117 19.0989 23.4117 18.6989C23.4117 18.2989 23.2637 17.9469 22.9677 17.6429C22.6717 17.3389 22.3237 17.1869 21.9237 17.1869H2.91573C2.51573 17.1869 2.16773 17.3389 1.87173 17.6429C1.57573 17.9469 1.42773 18.2989 1.42773 18.6989C1.42773 19.0989 1.57573 19.4469 1.87173 19.7429C2.16773 20.0389 2.51573 20.1869 2.91573 20.1869Z" fill="#271C47"/>
              </svg>
            ):(
              <>
                +
              </>
            )}
          </button>

          {showMenu ? (
            <nav className={!showMenu ? "menu menu-mobile" : "menu menu-mobile active"}>
              <ul>
                <a href="https://www.econverse.com.br/">Home</a>

                <a href="https://www.econverse.com.br/servicos-e-solucoes/">
                  Serviços
                </a>

                <a href="https://www.econverse.com.br/cases/">Cases</a>

                <a href="https://www.econverse.com.br/app-commerce/">App Commerce</a>

                <a href="https://www.econverse.com.br/sobre-nos/">Sobre nós</a>

                <a href="https://www.econverse.com.br/blog/">Blog</a>

                <a href="https://www.econverse.com.br/contato/">Contato</a>
              </ul>
            </nav>
          ) : null}

        </>
      )
        :
      (
        <>
          <a href="https://www.econverse.com.br/">
            <img
              src="https://www.econverse.com.br/wp-content/uploads/2024/01/Logo-para-fundo-claro.png"
              alt="Logo Econverse"
            />
          </a>

          <nav className="menu">
            <ul>
              <a href="https://www.econverse.com.br/">Home</a>

              <a href="https://www.econverse.com.br/servicos-e-solucoes/">
                Serviços
              </a>

              <a href="https://www.econverse.com.br/cases/">Cases</a>

              <a href="https://www.econverse.com.br/app-commerce/">App Commerce</a>

              <a href="https://www.econverse.com.br/sobre-nos/">Sobre nós</a>

              <a href="https://www.econverse.com.br/blog/">Blog</a>

              <a href="https://www.econverse.com.br/contato/">Contato</a>
            </ul>
          </nav>

          <a className="contact-button" href="https://www.econverse.com.br/contato/">
            Fale Conosco
          </a>
        </>
      )
    }
      
    </header>
  );
};

export default Header;
