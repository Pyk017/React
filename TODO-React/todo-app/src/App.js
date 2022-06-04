import Navbar from "./Navbar";
import Home from "./Home";
import AddTask from "./AddTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App flexbox">
        <Navbar />
        <div className="content-box flexbox">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-new-task" element={<AddTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
