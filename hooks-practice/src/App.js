import "./App.css";
import Counter from "./Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import ChangeTheme from "./ChangeTheme";
import UseRef from "./UseRef";
import UseContext from "./UseContext";
import CustomHook from "./CustomHook";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/changetheme" element={<ChangeTheme />} />
          <Route exact path="/useref" element={<UseRef />} />
          <Route exact path="/usecontext" element={<UseContext />} />
          <Route exact path="/customhook" element={<CustomHook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
