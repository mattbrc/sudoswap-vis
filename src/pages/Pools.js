import React from "react";
import Navbar from "../components/Navbar.js";
import "../App.css";
import twitterLogo from "../assets/twitter-logo.svg";
import DailyEthPoolStats from "../components/datafeeds/DailyEthPoolStats";

const TWITTER_HANDLE = "matt_brc";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Pools = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">Pools</h1>
        <p>Pools created, top pools by volume/balance, bonding curves</p>
        <DailyEthPoolStats />
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

export default Pools;
