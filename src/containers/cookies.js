import Cookies from "js-cookie";
const Cookies = () => {
  return (
    <div>
      <button
        onClick={() => {
          Cookies.set("motdepas", "8939889D78D893");
        }}
      >
        Create Cookie
      </button>
      <button
        onClick={() => {
          console.log(Cookies.get("motdepasse"));
        }}
      >
        Get cookie Value
      </button>
      <button
        onClick={() => {
          Cookies.remove("motdepasse");
        }}
      >
        Supprimer le cookie
      </button>
    </div>
  );
};

export default Cookies;
