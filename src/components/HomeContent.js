// import Home from "./Home.js";
import Navbar from "./Navbar.js";
import Footer from "../components/Footer.js";
import VolumeChart from "./charts/VolumeChart.js";
// import ProtocolStats from "./datafeeds/ProtocolStats.js";
import "../App.css";

function HomeContent() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">sudoswap visualization 🚀</h1>
        <VolumeChart />
        <p>Leaderboard</p>
        <p>Top NFTs by swap volume</p>
        <Footer />
      </div>
    </div>
  );
}

export default HomeContent;
