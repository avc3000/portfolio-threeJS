import React from "react";
import { ComposableMap, Geographies, Geography, Annotation, Marker } from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{ rotate: [58, 20, 0], center: [-5, -3], scale: 700 }} style={{width:"100%", height:"100%"}}>
      <Geographies geography="/features.json" fill="#2C065D" stroke="#FFFFFF" strokeWidth={0.5}>
        {
          ({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation subject={[-77.0428, -12.0464]} dx={-90} dy={-30} connectorProps={{ stroke: "white", strokeWidth: 2, strokeLinecap: "round" }}>
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">{"Lima"}</text>
      </Annotation>
      <Marker key={1} coordinates={[-77.0428, -12.0464]}>
        <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
      </Marker>
    </ComposableMap>
  );
};

export default Map;
