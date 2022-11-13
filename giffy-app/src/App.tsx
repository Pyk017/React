import Navbar from "./components/Navbar";
import Random from "./components/Random_V1";
import Tag from "./components/Tag_V1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
