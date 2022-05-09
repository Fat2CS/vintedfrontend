import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, seteMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password
        }
      );
      console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="form">
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form"
          valeur={email}
          type="email"
          placeholder="adresse email"
          onChange={(event) => {
            seteMail(event.target.value);
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
        <input className="subm" type="submit" value="se connecter" />
      </form>
    </div>
  );
};

export default Login;
