import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App flexbox">
      <Navbar />
      <div className="content-box flexbox">
        <Home />
      </div>
    </div>
  );
}

export default App;
