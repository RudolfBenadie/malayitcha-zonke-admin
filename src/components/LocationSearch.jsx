import React, { useRef, useEffect } from 'react';
import { Input, InputGroup, InputGroupText } from 'reactstrap';

const LocationSearch = () => {
  const ref = useRef();
  let locationInput;

  useEffect(() => {
    locationInput = new window.google.maps.places.Autocomplete(ref.current, {});
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
