import React from 'react'
import Home from './pages/Home.jsx'
import Baku from './pages/Baku.jsx'
import Sumgait from './pages/Sumgait.jsx'
import Guba from './pages/Guba.jsx'
import Sheki from './pages/Sheki.jsx'
import Gabala from './pages/Gabala.jsx'
import Shamakhi from './pages/Shamakhi.jsx'
import Ganja from './pages/Ganja.jsx'
import Mingachevir from './pages/Mingachevir.jsx'
import Yevlakh from './pages/Yevlakh.jsx'
import Nakhchivan from './pages/Nakhchivan.jsx'
import Shusha from './pages/Shusha.jsx'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baku" element={<Baku />} />
        <Route path="/sumgait" element={<Sumgait />} />
        <Route path="/guba" element={<Guba />} />
        <Route path="/sheki" element={<Sheki />} />
        <Route path="/gabala" element={<Gabala />} />
        <Route path="/shamakhi" element={<Shamakhi />} />
        <Route path="/ganja" element={<Ganja />} />
        <Route path="/mingachevir" element={<Mingachevir />} />
        <Route path="/yevlakh" element={<Yevlakh />} />
        <Route path="/nakhchivan" element={<Nakhchivan />} />
        <Route path="/shusha" element={<Shusha />} />
      </Routes>
    </BrowserRouter>
  )
}
