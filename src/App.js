import "./App.css";
//import ProtocolStats from "./components/ProtocolStats";
import Home from "./components/Home";
// import Pairs from "./components/Pairs";
import Navbar from "./components/Navbar";
import ProtocolStats from "./components/ProtocolStats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <Home />
      </div>
    </div>
  );
}

export default App;
