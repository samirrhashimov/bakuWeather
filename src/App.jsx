import React from 'react'
import Home from './pages/Home.jsx'
import Baku from './pages/Baku.jsx'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baku" element={<Baku />} />
      </Routes>
    </BrowserRouter>
  )
}
