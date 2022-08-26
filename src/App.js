import "./App.css";
//import ProtocolStats from "./components/protocolStats";
import VolumeChart from "./components/VolumeChart";
// import Pairs from "./components/pairs";

function App() {
  return (
    <div className="App">
      <h1>SudoAMM Visualization 🚀</h1>
      <div>
        <VolumeChart />
      </div>
    </div>
  );
}

export default App;
