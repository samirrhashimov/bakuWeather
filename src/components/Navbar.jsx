import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex items-center p-4 pb-2 justify-between">
          <div className="flex items-center">
            <FaLocationDot />
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] ml-2">Baku</h2>
          </div>
          <div>
            <h2 className="font-bold text-lg">bakuWeather</h2>
          </div>
        </div>
  )
}

export default Navbar;
