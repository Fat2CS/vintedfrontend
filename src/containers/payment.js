// import Cookies from "js-cookie";
import "../asset/payment.scss";
import { Navigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../componant/CheckoutForm";

// import axios from "axios";

const Payment = ({ usertoken }) => {
  const location = useLocation();
  console.log(location);
  // const { offer } = location;
  const { title, price } = location.state;
  console.log(title);

  const protectBuyer = price * 0.1;
  const shippingPrice = price * 0.2;
  const total = price + protectBuyer + shippingPrice;

  // console.log(price);

  // const userToken = Cookies.get("usertoken");

  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );
  return (
    <>
      {/* usertoken ? ( */}
      <div>
        {/* pour cette exemple on va utiliser le cookie */}
        <div className="formcontainer">
          <p>Résumé de la commande</p>;
          <ul>
            <li>
              <span>commande </span>
              <span> Nom de l'offre : </span> <span>{title}</span>
              <span> {total}€</span>
            </li>
            <li>
              <span>Frais protecion acheteurs</span>
              {/* <span> {protectBuyer}€</span>{" "} */}
            </li>

            <li>
              <span>Frais de port </span>
              {/* <span> {shippingPrice}€</span> */}
            </li>
          </ul>
          <Elements stripe={stripePromise}>
            <CheckoutForm title={title} price={price} />
          </Elements>
        </div>
        // <span> {title} </span>
        <h2> payer</h2>
        {/* ):( */}
        {/* <Navigate to="/login" />) */}
      </div>
    </>
  );
};

export default Payment;
