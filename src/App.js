import "./App.css";
import "./asset/offer.scss";
import "./asset/home.css";
import "./asset/home.scss";
import "./asset/offer.css";
import "./asset/fonts/transfonter.org-20220510-212901/stylesheetFont.css";

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

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  console.log(userToken);
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  return (
    <Router>
      <Header handleToken={handleToken} userToken={userToken} />
      <Routes>
        {/*  */}
        <Route path="/" element={<Home />} />
        <Route
          path="/offer/:id"
          element={<Offer handleToken={handleToken} userToken={userToken} />}
        />
        <Route path="/signup" element={<Sign handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route
          path="/publish"
          element={<Publish handleToken={handleToken} userToken={userToken} />}
        />
        <Route
          path="/payment"
          element={<Payment handleToken={handleToken} usertoken={userToken} />}
        />
      </Routes>
    </Router>
  );
  // );
}
export default App;
