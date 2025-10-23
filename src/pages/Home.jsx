import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import { FaLocationDot } from "react-icons/fa6";

function Home() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const options = [
        { name: "Home", path: "/" },
        { name: "Baku", path: "/baku" },
    ];

    const filteredOptions = options.filter(opt =>
        opt.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className='mainsetting flex flex-col items-center justify-center items-center align-middle'>
            <div className='cityList flex flex-col justify-center'>
                <input
                    type="text"
                    placeholder="Search Cities:"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <ul>
                    {filteredOptions.map((opt) => (
                        <li key={opt.path} onClick={() => navigate(opt.path)}>
                            <FaLocationDot/> {opt.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home
