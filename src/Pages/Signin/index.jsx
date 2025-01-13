import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Signin.css"
const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="center">
      <div className="login">
        <div className="area">
<img src={logo} alt="Logo do login" />
        </div>
        <form>
          <h1>Entrar</h1>
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

      <button type=""submit>Acessar</button>
        </form>
        <Link to="/SiginUp">Crie sua conta</Link>
      </div>
    </div>
  );
};

export default index;
