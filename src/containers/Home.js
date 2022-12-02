import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import banner from "../img/banner.jpg";
import "../asset/home.scss";

const Home = ({ data }) => {
  const [offers, setOffers] = useState({});
  const [isloading, setIsLoading] = useState(true);
  // const [data, setData] = useState();

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
        <div className="center">
          {offers.map((item, index) => {
            return (
              <div key={index} className="item">
                {/* <div className="owner">
                  {item.offers.owner.account.avatar && (
                    <img
                      className="avatar"
                      src={item.owner.account.avatar.secure_url}
                      alt="Owner avatar"
                    />
                  )}
                  <div className="username">{item.owner.account.username}</div>
                </div> */}
                <Link className="link" to={`/offer/${item._id}`}>
                  <div className="item_details">
                    <img
                      className="product_image"
                      src={item.product_image.secure_url}
                      alt=""
                    />
                    <div className="item_details_bottom">
                      <p className="price">{item.product_price} €</p>
                      {item.product_details.map((details) => {
                        if (details.TAILLE) {
                          return <p> {details.TAILLE} </p>;
                        }
                        if (details.MARQUE) {
                          return <p> {details.MARQUE} </p>;
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
