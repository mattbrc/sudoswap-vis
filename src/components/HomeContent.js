// import Home from "./Home.js";
import Navbar from "./Navbar.js";
import VolumeChart from "./charts/VolumeChart.js";
// import ProtocolStats from "./datafeeds/ProtocolStats.js";
import "../App.css";
import twitterLogo from "../assets/twitter-logo.svg";

const TWITTER_HANDLE = "matt_brc";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

function HomeContent() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">sudoswap visualization 🚀</h1>
        <VolumeChart />
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
}

export default HomeContent;
