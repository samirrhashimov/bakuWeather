import { useEffect, useRef, useState } from "react";
import React from 'react';

export default function CountryMap() {
  const mapRef = useRef(null);
  const [mapKey, setMapKey] = useState(0);
  const reloadTimeoutRef = useRef(null);

  useEffect(() => {
    if (reloadTimeoutRef.current) {
      clearTimeout(reloadTimeoutRef.current);
    }

    const loadMap = () => {
      const mapContainer = document.getElementById('map');
      if (!mapContainer) return;

      mapContainer.innerHTML = '';

      if (window.simplemaps_countrymap) {
        try {
          window.simplemaps_countrymap.load();
         
          setTimeout(() => {
            const svg = document.querySelector('#map_inner svg');
            if (!svg) {
              setMapKey(prev => prev + 1);
            }
          }, 500);
        } catch (error) {
          // Silent error handling
        }
      }
    };

    loadMap();

    const preventMapClear = () => {
      const mapInner = document.getElementById('map_inner');
      if (mapInner && !mapInner.querySelector('svg')) {
        reloadTimeoutRef.current = setTimeout(() => {
          setMapKey(prev => prev + 1);
        }, 100);
      }
    };

    document.addEventListener('mousemove', preventMapClear);

    return () => {
      document.removeEventListener('mousemove', preventMapClear);
      if (reloadTimeoutRef.current) {
        clearTimeout(reloadTimeoutRef.current);
      }
    };
  }, [mapKey]);

  return (
    <div
      id="map"
      key={mapKey}
      ref={mapRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '391px',
        isolation: 'isolate'
      }}
    />
  );
}