import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import CardsContextProvider from "./contexts/CardsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CardsContextProvider>
        <App />
      </CardsContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
