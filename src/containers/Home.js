import { Link } from "react-router-dom";
import Header from "../componant/header";
import banner from "../img/banner.jpg";
const Home = ({ offers }) => {
  console.log("Home", offers);
  return (
    <div>
      Home
      {Header}
      {/* <Link to={"/containers/Offer"}> Go to Offer</Link> */}
      <div className="Head"></div>
      {/* affichage photos */}
      <div className="App">
        <p>grosse Photo</p>
        <img
          alt="banniere"
          src={banner}
          style={{
            width: "1720px",
            height: "454px",
            objectFit: "cover",
            marginTop: "-6%"
          }}
        ></img>

        <main>
          {offers.map((offer, index) => {
            return (
              <Link to={`/offer/${offer._id}`}>
                <div key={index}>
                  <div className="annonce">
                    {/* <p>{offer.owner.account.avatar.secure_url}</p> */}
                    <p>{offer.owner.account.username}</p>
                    {offer.product_pictures[0] ? (
                      <img
                        src={offer.product_pictures[0].secure_url}
                        alt="imgprod"
                      />
                    ) : null}
                    <p>{offer.product_price}€</p>
                    <p>{offer.product_details[0].MARQUE}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Home;
