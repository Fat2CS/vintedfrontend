import "../asset/CheckoutForm.scss";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = ({ title, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [confirmMessage, setConfirmMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handlePayment = async (event) => {
    try {
      event.preventDefault();
      setDisabled(true);
      //  récuperer les données bancaires;
      const cardInfos = elements.getElement(CardElement);
      //envoyer ces données à l'api Stripe
      const stripeResponse = await stripe.createToken(cardInfos, {
        name: "Nicolas"
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      //Récupérer un stripToken
      //Envoyer ce stripeTOken à l'api Vinted
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: price
        }
      );
      if (response.data.status === "succeeded") {
        setConfirmMessage("Paiement validé !");
      }
      setDisabled(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="chekout">
      <form onSubmit={handlePayment}>
        <CardElement />
        <input type="submit" value="Pay" disabled={disabled} />
        <span style={{ color: "green" }}>{confirmMessage}</span>
      </form>
    </div>
  );
};

export default CheckoutForm;
