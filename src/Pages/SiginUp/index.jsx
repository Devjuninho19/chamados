import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SiginUp.css";
import logo from "../../assets/logo.png";
const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e){
e.preventDefault();
if(name !== "" && email !== "" && passowrd !== ""){
  alert("REALIZE O SEU CADASTRO")
}
}
  return (
    <div className="center">
      <div className="cadastro">
        <div className="area">
          <img src={logo} alt="Logo do login" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
