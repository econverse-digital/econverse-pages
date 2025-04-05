import React, { useState } from "react";
import "../../scss/econverse-form.scss";

import formImage from "../assets/images/bg-form-image-new.png";

import formImageMobile from "../assets/images/webnar-omnicanalidade-main-banner-mob.png";

import mainBanner from "../assets/images/webnar-omnicanalidade-main-banner.png";

import PopUpForm from "./PopUpForm.jsx";

const FormFull = () => {
  const isMobile = window.innerWidth < 768;
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleTelefoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2");

    setTelefone(formattedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("telefone>>>", telefone.length);

    if (telefone.length < 13) {
      alert("Por favor, insira um telefone valido");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    const response = await fetch("/api/submitFormFull", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nome,
        email,
        phone: telefone,
        enterprise: empresa,
        role: cargo,
      }),
    });

    if (response.ok) {
      setShowPopup(true);
      setNome("");
      setEmail("");
      setTelefone("");
      setEmpresa("");
      setCargo("");

      const googleFormURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSePVbMxVvknBHZky55FElxzyI27XKDpKXJiQmGTWD72DGThFw/formResponse";
      const googleFormData = new FormData();
      googleFormData.append("entry.62206188", email);
      fetch(googleFormURL, {
        method: "POST",
        body: googleFormData,
      }).then((response) => {
        if (response.ok) {
          console.log("Formulário enviado com sucesso");
        } else {
          console.log("Erro ao enviar formulário");
        }
      });
    } else {
      alert("Erro ao enviar o formulário.");
    }
  };

  return (
    <div
      id="form-full-container"
      style={{
        backgroundImage: `url(${isMobile ? formImageMobile : mainBanner })`,
      }}
    >
      
      {showPopup && (
        <PopUpForm show={showPopup} hide={() => setShowPopup(false)} />
      )}

      <div id="form-content">

        {/* <div className="left-side">
          <span>Inscreva-se!</span>
          <p>
            Não perca essa oportunidade única! Tenha acesso a insights valiosos,
            especialistas renomados e conteúdos exclusivos que podem transformar
            sua jornada.
          </p>
        </div> */}

        <form className="form" onSubmit={handleSubmit}>
          
          <p className="form-title">Faça sua inscrição</p>

          <label htmlFor="nome">
            Nome
            <input
              type="text"
              name="nome"
              value={nome}
              placeholder="Seu nome completo"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Seu melhor e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="cargo">
            Cargo
            <input
              type="text"
              name="cargo"
              value={cargo}
              placeholder="Cargo:"
              onChange={(e) => setCargo(e.target.value)}
            />
          </label>

          <label htmlFor="empresa">
            Empresa
            <input
              type="text"
              name="empresa"
              value={empresa}
              placeholder="Empresa:"
              onChange={(e) => setEmpresa(e.target.value)}
            />
          </label>

          <label htmlFor="telefone">
            Telefone
            <input
              type="text"
              name="telefone"
              value={telefone}
              placeholder="Telefone"
              onChange={handleTelefoneChange}
              maxLength="15" // Limita o comprimento para o formato (XX) XXXXX-XXXX
            />
          </label>

          <button type="submit" id="fullForm">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormFull;
