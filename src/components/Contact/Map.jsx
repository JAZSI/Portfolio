import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from 'react-simple-maps';

function Map() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-50, 0, 0],
        center: [60, 13],
        scale: 1200,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Geographies
        geography="/map.json"
        fill="#E6B8E673"
        stroke="#000000"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[121, 14]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: '#FFF',
          strokeWidth: 2,
          strokeLinecap: 'round',
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#FFF"
          style={{ fontSize: '24px' }}
        >
          {'Jaszi is here'}
        </text>
      </Annotation>
    </ComposableMap>
  );
}

export default Map;
