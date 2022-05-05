import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();
  console.log(id);
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

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <h2>{offer.product_name}</h2>
      <span>{offer.product_price}</span>
      <div>
        {offer.product_details.map((item, index) => {
          const keys = Object.keys(item);

          return (
            <div key={index}>
              {keys[0]} : {offer[keys[0]]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
