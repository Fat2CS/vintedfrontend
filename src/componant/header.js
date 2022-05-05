import logo from "../img/vinted9809.jpeg";
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
      <div className="recherche">
        <input placeholder="recherche des articles"></input>
      </div>
      <div className="buttons">
        <button> s'incrire </button>
        <button>se connecter</button>
        <button>vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
