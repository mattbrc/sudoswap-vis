import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../App.css";
import DailyEthPoolStats from "../components/datafeeds/DailyEthPoolStats";

const Pools = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">Pools</h1>
        <p>Pools created, top pools by volume/balance, bonding curves</p>
        <DailyEthPoolStats />
        <Footer />
      </div>
    </div>
  );
};

export default Pools;
