import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pools from "./pages/Pools";
import Arbs from "./pages/Arbs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/arbs" element={<Arbs />} />
      </Routes>
    </Router>
  );
}

export default App;
