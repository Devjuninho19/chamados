import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SiginUp.css";
import logo from "../../assets/logo.png";
const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  return (
    <div className="center">
      <div className="cadastro">
        <div className="area">
          <img src={logo} alt="Logo do login" />
        </div>
        <form>
          <h1>Cadastre-se</h1>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="" submit>
            Acessar
          </button>
        </form>
        <Link to="/Sigin">Já possui uma conta? faça o seu Login</Link>
      </div>
    </div>
  );
};

export default index;
