import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        
        {/* ROTA PRIVADA */}
        {/* <Route path="/painel" element={<Panel />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
