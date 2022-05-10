import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import { CardElement, useStripe, useElements } from "react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;
  const protectBuyer = price * 0.1;
  const shippingPrice = price * 0.2;
  const total = price + protectBuyer + shippingPrice;

  console.log(price);
  return (
    <div>
      <div className="formcontainer">
        <p>Résumé de la commande</p>;
        <ul>
          <li>
            <span>commande </span>
            <span> {total}€</span>
          </li>
          <li><span>Frais protecion acheteurs</span>
            <span> {protectBuyer}€</span> </li>
          <>
    
            <span>Frais de port </span>
            <span> {shippingPrice}€</span>
        
          </li>
        </ul>
      </div>
      // <span> {title} </span>
      <h2> payer</h2>
    </div>
  );
};

export default Payment;
