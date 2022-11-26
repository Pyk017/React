import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShoppingCartContextProvider from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </ShoppingCartContextProvider>
  );
}

export default App;
