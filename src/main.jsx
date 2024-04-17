import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login.jsx";
import { Painel } from "./pages/Painel/Painel.jsx";
import { Vacancies } from "./pages/Vacancies/vacancies.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/vacancies/:id" element={<Vacancies />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
