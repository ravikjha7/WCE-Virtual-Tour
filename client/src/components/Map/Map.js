import React from "react";
import { useRef, useEffect } from "react";
import { useMap } from '../../hooks/useMap';
import './styles.css';

const Map = () => {
  
  const mapRef = useRef(null);
  useMap(mapRef);

  return (
  <div ref={mapRef} id="myMap" className="map"></div>
  );
};

export default Map;
