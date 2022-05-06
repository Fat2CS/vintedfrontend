import { useState } from "react";
import axios from "axios";
import Header from "../componant/header";
const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form">
      <Header />
      <h1>Se connecter</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/login",
              {
                email: "johndoe@lereacteur.io",
                password: "azerty"
              }
            );
            console.log(response.data);
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <input
          className="form"
          valeur={mail}
          type="email"
          placeholder="adresse email"
          onChange={(event) => {
            setMail(event.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </form>
      <input className="subm" type="submit" value="se connecter" />
    </div>
  );
};

export default Login;
