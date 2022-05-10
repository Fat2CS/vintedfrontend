import "./App.css";
import "./asset/offer.scss";
import "./asset/home.css";
import "./asset/home.scss";
import "./asset/offer.css";

import React, { useState } from "react";
// import axios from "axios";
import Cookies from "js-cookie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offer from "./containers/Offer";

import Home from "./containers/Home";
import Sign from "./containers/Signup";
import Login from "./containers/login";
import Header from "./componant/header";
import Publish from "./containers/Publish";
import Payment from "./containers/payment";

// import logo from "./img/vinted9809.";

function App() {
  const [usertoken, setUserToken] = useState(Cookies.get("usertoken") || null);

  console.log(usertoken);
  const handleToken = (token) => {
    if (token) {
      Cookies.set("usertoken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("usertoken");
      setUserToken(null);
    }
  };
  return (
    <Router>
      <Header handleToken={handleToken} usertoken={usertoken} />
      <Routes>
        {/*  */}
        <Route path="/" element={<Home />} />
        <Route
          path="/offer/:id"
          element={<Offer handleToken={handleToken} usertoken={usertoken} />}
        />
        <Route path="/signup" element={<Sign handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route
          path="/publish"
          element={<Publish handleToken={handleToken} usertoken={usertoken} />}
        />
        <Route
          path="/payment"
          element={<Payment handleToken={handleToken} />}
        />
      </Routes>
    </Router>
  );
  // );
}
export default App;
