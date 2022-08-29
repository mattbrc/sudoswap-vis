import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pools from "./pages/Pools";
import Swaps from "./pages/Swaps";
import ProtocolData from "./pages/ProtocolData";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/swaps" element={<Swaps />} />
        <Route path="/data" element={<ProtocolData />} />
      </Routes>
    </Router>
  );
}

export default App;
