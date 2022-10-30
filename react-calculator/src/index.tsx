import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncDec from "./IncDec";
import Todos from "./Todos";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/inc" element={<IncDec />}></Route>
        <Route path="/todos" element={<Todos />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
