import React, { useRef, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';

const GoogleMap = ({ center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Card style={{ flex: 3 }}><CardBody><div ref={ref} id="map" /></CardBody></Card>
      <Card id='map-meta-data' style={{ flex: 1 }}></Card>
    </div>
  );
}

export default GoogleMap;
