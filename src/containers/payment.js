import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { title } = location.state;
  return (
    //   <span> {title} </span>
    <h2> payer</h2>
  );
};

export default Payment;
