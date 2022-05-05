import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
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
        <input type="submit" value="se connecter" />
      </form>
    </div>
  );
};

export default Login;
