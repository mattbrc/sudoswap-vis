import "./App.css";
import ProtocolStats from "./components/protocolStats";
import Pairs from "./components/pairs";

function App() {
  return (
    <div className="App">
      <h1>SudoAMM Visualization</h1>
      <div>
        <ProtocolStats />
        <Pairs />
      </div>
    </div>
  );
}

export default App;
