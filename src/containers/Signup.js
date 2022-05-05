// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Sign = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  return isLoading === false ? (
    <div> En cours de chargement</div>
  ) : (
    <div>
      <h1>S'inscrire</h1>
      <form
        on
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              {
                email: " email",
                username: " username"
                // "newsletter": true
              }
            );
            console.log(response.data);

            setIsLoading(false);
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
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
        <input type="submit" value="s'inscrire" />
      </form>
    </div>
  );
};
export default Sign;
