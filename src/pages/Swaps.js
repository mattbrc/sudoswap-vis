import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../App.css";

const Swaps = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">Swaps</h1>
        <p>
          Swap volume, top NFT swaps by contract/volume, best Arbs available
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default Swaps;
