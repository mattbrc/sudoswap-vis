import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../App.css";
import ArbChart from "../components/charts/ArbChart";

const ProtocolData = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">Arbs</h1>
        <p className="App-sub-text">
          Potential arbitrage between Sudoswap spot price and market floor price
          (from Opensea API)
        </p>
        <ArbChart />
        <Footer />
      </div>
    </div>
  );
};

export default ProtocolData;
