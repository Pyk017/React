import MenuList from "./components/MenuList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseToggleComponent from "./components/UseToggleComponent";
import UseTimeoutComponent from "./components/UseTimeoutComponent";
import UseDebounceComponent from "./components/UseDebounceComponent";
import UseUpdateEffectComponent from "./components/UseUpdateEffectComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MenuList />}></Route>
          <Route path="/usetoggle" element={<UseToggleComponent />}></Route>
          <Route path="/usetimeout" element={<UseTimeoutComponent />}></Route>
          <Route path="/usedebounce" element={<UseDebounceComponent />}></Route>
          <Route
            path="/useupdate"
            element={<UseUpdateEffectComponent />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
