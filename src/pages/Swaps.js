import React from "react";
import Navbar from "../components/Navbar.js";
import "../App.css";
import twitterLogo from "../assets/twitter-logo.svg";

const TWITTER_HANDLE = "matt_brc";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Swaps = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">Swaps</h1>
        <p>
          Swap volume, top NFT swaps by contract/volume, best Arbs available
        </p>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default Swaps;
