import React from "react";
import HeroPage from "./style";
import {
  Link
} from "react-router-dom";

const WelcomePage = () => {
  return (
    <HeroPage>
        <Link to="app" className="skip-login">Pular Login</Link>
      <div className="text-top">
        <img src="https://cdn-icons-png.flaticon.com/512/2037/2037086.png" alt="inteligente" />
        <h1>
          Tech<br></br>
          <span>Quiz</span>
        </h1>
      </div>
      <div className="text-center">
        <h2>Vamos jogar?</h2>
        <p>Entre e aumente seu nível</p>
      </div>
      <div className="area-btns">
        <button id="btn-login">Entrar</button>
        <button id="btn-registrar">Registrar-se</button>
      </div>
    </HeroPage>
  );
};

export default WelcomePage;
