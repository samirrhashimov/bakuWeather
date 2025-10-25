import { useEffect } from "react";
import React from 'react'

export default function CountryMap() {
  useEffect(() => {
    if (window.simplemaps_countrymap) {
      window.simplemaps_countrymap.load();
    }
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
}
