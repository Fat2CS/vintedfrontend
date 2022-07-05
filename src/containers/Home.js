import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import banner from "../img/banner.jpg";
import "../asset/home.scss";

const Home = ({ data, setSwitchPage, switchPage, limit, setLimit }) => {
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
      <div className="home">
        <div className="App">
          <img
            alt="banniere"
            src={banner}
            style={{
              width: "100vw",
              height: "554px",
              backgroundsize: "cover",
              objectFit: "cover",

              position: "relative",
              backgroundposition: "50%50%",
              borderslice: "50 0 50 0 fill",
              borderwidth: "20 0 20 0"
            }}
          ></img>
          <div className="square">
            <h3> Prêt à faire du tri dans vos placards</h3>

            <Link to="./Publish" style={{ textDecoration: "none" }}>
              <button>
                <p>Commencer à vendre</p>
              </button>
            </Link>
          </div>
        </div>

        <main className="offers">
          {offers.map((offer, index) => {
            return (
              <Link
                to={`/offer/${offer._id}`}
                style={{ textDecoration: "none" }}
              >
                <div key={index}>
                  <div className="annonce">
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
