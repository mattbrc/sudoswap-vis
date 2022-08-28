// import Home from "./Home.js";
import Navbar from "./Navbar.js";
import VolumeChart from "./charts/VolumeChart.js";
import "../App.css";

function HomeContent() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <h1 className="App-text">sudoswap visualization 🚀</h1>
        <p className="App-sub-text">Recent Stats:</p>
        <VolumeChart />
      </div>
    </div>
  );
}

export default HomeContent;
