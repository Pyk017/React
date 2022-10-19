import "./App.css";
import Navbar from "./Navbar";
import QRGenerator from "./QRGenerator";
import QRScanner from "./QRScanner";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<QRGenerator />} />
            <Route path="/home" element={<QRGenerator />} />
            <Route path="/generator" element={<QRGenerator />} />
            <Route path="/scanner" exact element={<QRScanner />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
