import { useEffect } from "react";
import React from "react";

export default function CountryMap() {
  useEffect(() => {

    const dataScript = document.createElement("script");
    dataScript.src = "../public/scripts/mapdata.js";
    dataScript.async = true;

    const countryScript = document.createElement("script");
    countryScript.src = "../public/scripts/countrymap.js";
    countryScript.async = true;

    countryScript.onload = () => {
      document.body.appendChild(dataScript);
    };

    dataScript.onload = () => {
      if (window.simplemaps_countrymap) {
        window.simplemaps_countrymap.load();
      }
    };

    document.body.appendChild(countryScript);

    return () => {
      document.body.removeChild(countryScript);
      document.body.removeChild(dataScript);
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
}
