import Navbar from "./Navbar";
import Home from "./Home";
import AddTask from "./AddTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewTask from "./ViewTask";

function App() {
  return (
    <Router>
      <div className="App flexbox">
        <Navbar />
        <div className="content-box flexbox">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-new-task" element={<AddTask />} />
            <Route exact path="/tasks/:id" element={<ViewTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
