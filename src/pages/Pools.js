import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../App.css";
import PoolChart from "../components/charts/PoolChart.js";

const Pools = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">Pools</h1>
        <p>Recent Pool Data</p>
        <PoolChart />
        <Footer />
      </div>
    </div>
  );
};

export default Pools;
