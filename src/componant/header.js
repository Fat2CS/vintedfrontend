import logo from "../img/vinted9809.jpeg";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ handleToken, usertoken }) => {
  return (
    <header>
      <div className="logo">
        <img
          alt="logo"
          src={logo}
          style={{ height: "90px", display: "flex" }}
        />
      </div>

      {/* BOUTON HEADER */}

      {!usertoken ? (
        <>
          <div className="recherche">
            <input placeholder="recherche des articles"></input>
          </div>
          <div className="buttons">
            <Link to="/Signup">
              <button> s'incrire </button>
            </Link>
            <Link to="/login">
              <button>se connecter</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              handleToken();
            }}
          >
            Déconnexion
          </button>
          <button>vends tes articles</button>
        </>
      )}
    </header>
  );
};
export default Header;
