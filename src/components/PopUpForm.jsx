import React, { useState } from "react";
import "../../css/econverse-popup-form.css";
import checkIcon from "../assets/images/check-circle.png";

const PopUpForm = ({show, hide}) => {

  return (
    show && (
      <div id="popup-container">
        <div className="overlay" onClick={hide}> </div>
  
        <div className="form-container">
          <img src={checkIcon} alt="Check Icon" />
  
          <span>Inscrição realizada!</span>
  
          <p>
            Obrigada por se inscrever! Em breve, você receberá mais informações
            sobre o evento. Fique de olho na sua caixa de e-mail. Até logo! 
            <br/><br/>Equipe Econverse
          </p>
  
          <button onClick={hide} >OK!</button>
        </div>
      </div>
    )
  );

};

export default PopUpForm;
