// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        email: "email",
        username: "name",
        password: "password"
        // "newsletter": true
      }
    );
    console.log(response.data);

    setIsLoading(false);
  };
  fetchData();

  return isLoading === true ? (
    <div> En cours de chargement</div>
  ) : (
    <body>
      <h1>S'inscrire</h1>
      <form
        on
        onSubmit={(event) => {
          event.preventDefault();
          fetchData();
        }}
      >
        <input
          value={name}
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
    </body>
  );
};
export default Sign;
