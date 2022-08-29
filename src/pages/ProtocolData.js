import React from "react";
import Navbar from "../components/Navbar.js";
import "../App.css";
import twitterLogo from "../assets/twitter-logo.svg";
import ProtocolSwapVolume from "../components/datafeeds/ProtocolSwapVolume.js";

const TWITTER_HANDLE = "matt_brc";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

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

export default ProtocolData;
