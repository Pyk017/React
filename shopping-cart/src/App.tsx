import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShoppingCartContextProvider from "./context/ShoppingCartContext";
import ProductsContextProvider from "./context/ProductsContext";

function App() {
  return (
    <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </ShoppingCartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
