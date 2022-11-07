import MenuList from "./components/MenuList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseToggleComponent from "./components/UseToggleComponent";
import UseTimeoutComponent from "./components/UseTimeoutComponent";
import UseDebounceComponent from "./components/UseDebounceComponent";
import UseUpdateEffectComponent from "./components/UseUpdateEffectComponent";
import UseArrayComponent from "./components/UseArrayComponent";
import UsePreviousComponent from "./components/UsePreviousComponent";
import UseStateWithHistoryComponent from "./components/UseStateWithHistoryComponent";
import UseStorageComponent from "./components/UseStorageComponent";
import UseAsynComponent from "./components/UseAsyncComponent";
import UseFetchComponent from "./components/UseFetchComponent";
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
          <Route path="/usearray" element={<UseArrayComponent />}></Route>
          <Route path="/useprevious" element={<UsePreviousComponent />}></Route>
          <Route
            path="/usestatehistory"
            element={<UseStateWithHistoryComponent />}
          ></Route>
          <Route path="/usestorage" element={<UseStorageComponent />}></Route>
          <Route path="/useasync" element={<UseAsynComponent />}></Route>
          <Route path="/usefetch" element={<UseFetchComponent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
