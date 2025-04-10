import React, { useState } from "react";
import "../../src/assets/styles/econverse-form.scss";

import formImage from "../assets/images/bg-form-image-new.png";

import formImageMobile from "../assets/images/bg-form-image-mobile-new.png";

import PopUpForm from "../components/PopUpForm.jsx";

const Form = () => {
  const isMobile = window.innerWidth < 768;
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // const handleTelefoneChange = (e) => {
  //   const value = e.target.value.replace(/\D/g, "");
  //   const formattedValue = value
  //     .replace(/^(\d{2})(\d)/, "($1) $2")
  //     .replace(/(\d{5})(\d{4})$/, "$1-$2");
  //   setTelefone(formattedValue);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ nome, email }),
    });

    if (response.ok) {
      setShowPopup(true);
      setNome("");
      setEmail("");

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
      id="form-container"
      style={{
        backgroundImage: `url(${isMobile ? formImageMobile : formImage})`,
      }}
    >
      {showPopup && (
        <PopUpForm show={showPopup} hide={() => setShowPopup(false)} />
      )}

      <div id="form-content">

        <div className="left-side">
          <span>Inscreva-se!</span>
          <p>Se você não conseguir participar da live, registre-se para receber o material gratuitamente :)</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
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

          <button type="submit" >
            ENVIAR
          </button>

        </form>

      </div>

    </div>
  );
};

export default Form;
