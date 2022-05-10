import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Offer = ({ usertoken }) => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [offer, setOffers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log(usertoken, "<<<<<<<");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      console.log(response.data);
      setOffers(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  const handlepayment = () => {
    if (usertoken) {
      navigate("/payment", {
        state: { title: offer.product_name, price: offer.product_price }
      });
    } else {
      navigate("/signup");
    }
  };

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="offerbody">
      <img
        className="offerpicture"
        src={offer.product_pictures[0].secure_url}
        alt="imgprod"
      />
      <div className="offercontainer">
        <h1>{offer.product_name}</h1>
        <h2>Prix : {offer.product_price}€</h2>
        <p>Description : {offer.product_description}</p>

        <div>
          {offer.product_details.map((item, index) => {
            const keys = Object.keys(item);

            return (
              <div key={index}>
                {keys[0]} : {item[keys[0]]}
              </div>
            );
          })}

          <button
            onClick={() => {
              handlepayment(usertoken);

              // console.log(handlepayment);
            }}
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
};
export default Offer;
