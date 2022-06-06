import "./App.css";
import Counter from "./Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
