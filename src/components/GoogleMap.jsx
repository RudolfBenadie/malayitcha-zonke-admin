import React, { useRef, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { useRealtimeData } from '../context/RealtimeDataContext';
import LocationSearch from './LocationSearch';

const GoogleMap = ({ center, zoom }) => {
  const { selectedLocation, setSelectedLocation } = useRealtimeData();
  const ref = useRef();
  let map;

  useEffect(() => {
    map = new window.google.maps.Map(ref.current, {
      center: { lat: selectedLocation.latitude, lng: selectedLocation.longitude },
      zoom: selectedLocation.zoom,
    });
    map.addListener("click", (mapsMouseEvent) => {
      setSelectedLocation({ latitude: mapsMouseEvent.latLng.lat(), longitude: mapsMouseEvent.latLng.lng(), placeId: null, zoom: 15 })
    });
    map.addListener("place_changed", (placeChangeEvent) => {
      const longitude = (placeChangeEvent.geometry.viewport.Sa.h + placeChangeEvent.geometry.viewport.Sa.j) / 2;
      const latitude = (placeChangeEvent.geometry.viewport.wb.h + placeChangeEvent.geometry.viewport.wb.j) / 2;
      setSelectedLocation({ latitude, longitude, placeId: placeChangeEvent.place_id, zoom: 15 })
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
