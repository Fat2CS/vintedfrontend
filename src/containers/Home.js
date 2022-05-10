import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import banner from "../img/banner.jpg";
// import "./home.scss";

const Home = () => {
  const [offers, setOffers] = useState({});
  const [isloading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    console.log("ici => ", response.data);
    setOffers(response.data.offers);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isloading === true ? (
    <span> En cours de chargement</span>
  ) : (
    <div>
      Home
      {/* <Link to={"/containers/Offer"}> Go to Offer</Link> */}
      <div className="Head">
        {/* affichage photos */}
        <div className="App">
          <p>grosse Photo</p>
          <img
            alt="banniere"
            src={banner}
            style={{
              width: "1720px",
              height: "454px",
              backgroundsize: "cover",
              objectFit: "cover",

              marginTop: "-6%",
              position: "relative",
              backgroundposition: "50%50%",
              borderslice: "50 0 50 0 fill",
              borderwidth: "20 0 20 0"
            }}
          ></img>
          <div className="square">
            <h3> Prêt à faire du tri dans vos placards</h3>

            <Link to="./Publish">
              <button>
                <p>Commencer à vendre</p>
              </button>
            </Link>
          </div>
        </div>
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
                    <div className="description">
                      <h4>{offer.product_price}€</h4>

                      <span>{offer.product_details[0].MARQUE}</span>

                      <span>{offer.product_details[0].TAILLE}</span>
                    </div>
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
