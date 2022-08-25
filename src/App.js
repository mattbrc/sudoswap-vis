import "./App.css";
import ProtocolStats from "./components/protocolStats";

function App() {
  return (
    <div className="App">
      <h1>SudoAMM Visualization</h1>
      <div>
        <ProtocolStats />
      </div>
    </div>
  );
}

export default App;
