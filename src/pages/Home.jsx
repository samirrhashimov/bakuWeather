import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import { FaLocationDot } from "react-icons/fa6";
import AzerbaijanMap from '../components/AzerbaijanMap.jsx'

function Home() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const options = [
        { name: "Baku", path: "/baku" },
        { name: "Sumgait", path: "/sumgait" },
        { name: "Guba", path: "/guba" },
        { name: "Sheki", path: "/sheki" },
        { name: "Gabala", path: "/gabala" },
        { name: "Shamakhi", path: "/shamakhi" },
        { name: "Ganja", path: "/ganja" },
        { name: "Mingachevir", path: "/mingachevir" },
        { name: "Yevlakh", path: "/yevlakh" },
        { name: "Nakhchivan", path: "/nakhchivan" },
        { name: "Shusha", path: "/shusha" }
    ];

    const filteredOptions = options.filter(opt =>
        opt.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className='mainsetting flex flex-col items-center justify-center items-center align-middle'>
             <div>
                <h2 className="font-bold text-lg mb-8 mt-5">bakuWeather</h2>
            </div>
            <div className='mapArea'>
                <AzerbaijanMap />
            </div>
            <div className='cityContainer flex flex-col items-center justify-center items-center align-middle'>
            <div className='cityList flex flex-col justify-center'>
                <input
                    type="text"
                    placeholder="Search Cities"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <ul>
                    {filteredOptions.map((opt) => (
                        <li key={opt.path} onClick={() => navigate(opt.path)}>
                            <FaLocationDot /> {opt.name}
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Home
