import React, { useRef, useEffect } from 'react';
import { Input, InputGroup, InputGroupText } from 'reactstrap';
import { useRealtimeData } from '../context/RealtimeDataContext';

const LocationSearch = () => {
  const ref = useRef();
  let locationInput;
  const { setSelectedLocation } = useRealtimeData();

  useEffect(() => {
    locationInput = new window.google.maps.places.Autocomplete(ref.current, {
      // bounds: defaultBounds,
      componentRestrictions: { country: "za" },
      // fields: ["address_components", "geometry", "icon", "name"],
      // strictBounds: false,
      // types: ["establishment"],
    });
    locationInput.addListener("place_changed", () => {
      const selectedPlace = locationInput.getPlace();
      setSelectedLocation({ latitude: selectedPlace.geometry.location.lat(), longitude: selectedPlace.geometry.location.lng(), placeId: selectedPlace.place_id, zoom: 18 })
    });
  }, []);

  return (
    <div style={{ display: 'block' }}>
      <InputGroup>
        <InputGroupText>Address:</InputGroupText>
        <Input id='location-input' innerRef={ref}></Input>
      </InputGroup>

    </div>
  );
}

export default LocationSearch;
