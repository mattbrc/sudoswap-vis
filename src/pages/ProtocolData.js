import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../App.css";
import ProtocolSwapVolume from "../components/datafeeds/ProtocolSwapVolume.js";

const ProtocolData = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">Protocol Data</h1>
        <p className="App-sub-text">
          Volume, Users, Collections, Taker Actions (buy/sell/swap)
        </p>
        <ProtocolSwapVolume />
        <Footer />
      </div>
    </div>
  );
};

export default ProtocolData;
