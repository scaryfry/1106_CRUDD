import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./Pages/App.tsx";
import PizzaPage from "./Pages/PizzaPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/pizzak" element={<App />}></Route>
        <Route path="/pizzak/:id" element={<PizzaPage />}></Route>
        <Route path="*" element={<h1>404 not found!</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);