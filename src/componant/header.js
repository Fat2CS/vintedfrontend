import logo from "../img/vinted9809.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          alt="logo"
          src={logo}
          style={{ height: "90px", display: "flex" }}
        />
      </div>
      {/* Bouttons du header */}
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
        <button>vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
