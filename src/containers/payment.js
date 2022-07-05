// import Cookies from "js-cookie";
import "../asset/payment.scss";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../componant/CheckoutForm";
import { useLocation } from "react-router-dom";
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
    <section className="payment-page">
      <div className="container-payment-page">
        <p>Résumé de la commande</p>

        <div className="payment-detail-container">
          <div className="payment-detail">
            <span>Commande</span>
            <span>{price.toFixed(2)} €</span>
          </div>

          <div className="payment-detail">
            <span>Frais protection acheteurs</span>
            <span>{protectBuyer.toFixed(2)} €</span>
          </div>

          <div className="payment-detail">
            <span>Frais de port</span>
            <span>{shippingPrice.toFixed(2)} €</span>
          </div>
        </div>

        <div className="total-container">
          <div className="total">
            <span>Total</span>
            <span>{total.toFixed(2)}€</span>
          </div>
          <div>
            <p>
              Il ne vous reste plus qu'un étape pour vous offrir pull a perle.
              Vous allez payer {total.toFixed(2)} € (frais de protection et
              frais de port inclus).
            </p>
          </div>
        </div>

        <div className="card-container">
          <Elements stripe={stripePromise}>
            <CheckoutForm total={total} title={title} />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
