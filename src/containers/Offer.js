import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [offer, setOffers] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  const handlepayment = (userToken) => {
    if (userToken) {
      navigate("/payment", { offer: { title: "", price: "" } });
    } else {
      navigate("/signup");
    }
  };

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="offercontainer">
      <h2>{offer.product_name}</h2>
      <span>Prix : {offer.product_price}</span>
      <span>Description : {offer.product_description}</span>

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
            {
              {
                handlepayment;
              }
            }
            // console.log(handlepayment);
          }}
        >
          Acheter
        </button>
      </div>
    </div>
  );
};
export default Offer;
