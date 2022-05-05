import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offer from "./containers/Offer";

import Home from "./containers/Home";
import Sign from "./containers/Signup";
import Login from "./containers/login";
// import logo from "./img/vinted9809.";

function App() {
  const [offers, setOffers] = useState({});
  const [isloading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    console.log("ici => ", response.data);
    setOffers(response.data.offers);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isloading ? (
    <span> En cours de chargement</span>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Home offers={offers} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup/" element={<Sign />} />
        <Route path="/login/" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
