import "./App.css";

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

// import logo from "./img/vinted9809.";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("usertoken", token, { expires: 7 });
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
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Sign handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route
          path="/publish"
          element={<Publish handleToken={handleToken} />}
        />
      </Routes>
    </Router>
  );
  // );
}
export default App;
