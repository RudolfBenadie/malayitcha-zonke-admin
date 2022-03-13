import React, { useRef, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import LocationSearch from './LocationSearch';

const GoogleMap = ({ center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Card id='map-meta-data' style={{ flex: 1 }}>
        <LocationSearch />
      </Card>
      <Card style={{ flex: 3 }}><CardBody><div ref={ref} id="map" /></CardBody></Card>
    </div>
  );
}

export default GoogleMap;
