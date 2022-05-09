import { Link } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sign = ({ handleToken }) => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter
        }
      );
      handleToken(response.data.token);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>S'inscrire</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={username}
          type="text"
          placeholder="nom d'utilisateur"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
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
        <div className="checkbox_container">
          <div className="checkbox">
            <input
              className="checkbox_input"
              type="checkbox"
              onClick={() => {
                setNewsletter(!newsletter);
              }}
            />
            <span>S'inscrire à notre lewsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <input className="subsign" type="submit" value="s'inscrire" />
        <Link to={"/login"}>Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </div>
  );
};
export default Sign;
