import { Link } from "react-router-dom";
import { useState } from "react";
import "../asset/signup.scss";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sign = ({ handleToken }) => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

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
      <main>
        <form className="signup-container" onSubmit={handleSubmit}>
          <h1>S'inscrire</h1>

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

              <span>S'inscrire à notre Newsletter</span>
            </div>
            <div className="inscription">
              <p>
                En m'inscrivant je confirme avoir lu et accepté les Termes &
                Conditions et Politique de Confidentialité de Vinted. Je
                confirme avoir au moins 18 ans.
              </p>
            </div>
          </div>
          <input className="subsign" type="submit" value="s'inscrire" />
          <div></div>
          <Link style={{ color: "#2cb1ba", border: "none" }} to={"/login"}>
            Tu as déjà un compte ? Connecte-toi !
          </Link>
        </form>
      </main>
    </div>
  );
};
export default Sign;
