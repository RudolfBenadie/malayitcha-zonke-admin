import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Form, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import Select from 'react-select';
import { useAuth } from '../context/AuthContext';
import { useRealtimeData } from '../context/RealtimeDataContext';

const TripAdminPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ownerOptions, setOwnerOptions] = useState({});
  const [vehicleOptions, setVehicleOptions] = useState({});
  const [crewOptions, setCrewOptions] = useState({});
  const [owners, setOwners] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [crew, setCrew] = useState([]);

  const tripFormRef = useRef();

  const { currentUser } = useAuth();
  const realtimeData = useRealtimeData();

  useEffect(() => {
    const isAdmin = ~~currentUser.customClaims.admin;
    const oOptions = realtimeData.owner.reduce((list, owner) => {
      if (isAdmin || owner.id === currentUser.uid) list.push({ label: `${owner[1].name}`, value: owner[0] });
      return list;
    }, []);
    setOwnerOptions(oOptions);
  }, []);

  const ownerChanged = (owner) => {
    const vOptions = realtimeData.vehicles.reduce((list, vehicle) => {
      if (vehicle.ownerId === owner.value) list.push({
        label: `${vehicle.registration}: ${vehicle.make} - ${vehicle.capacity}`,
        value: vehicle.registration,
      });
      return list;
    }, []);
    setVehicleOptions(vOptions);
    const cOptions = realtimeData.crew.reduce((list, member) => {
      if (member[1].owner === owner.value) list.push({
        label: `${member[0] === member[1].owner ? owner.label : member[1].name}`,
        value: member[0],
      });
      return list;
    }, []);
    setCrewOptions(cOptions);
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const validateTrip = (trip) => {
    let result = (trip.owner !== null && trip.owner !== undefined) &&
      (trip.vehicle !== null && trip.vehicle !== undefined) &&
      (trip.crew !== null && trip.crew !== undefined) &&
      (trip.depart.description !== null && trip.depart.description !== undefined) &&
      (trip.arrive.description !== null && trip.arrive.description !== undefined) &&
      (trip.date !== null && trip.date !== undefined) &&
      (trip.time !== null && trip.time !== undefined)
    return result;
  }

  const addTrip = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const dateString = new Date(data.get('appointment-date')).toISOString();
    const tripData = {
      owner: data.get('trip-owner'),
      depart: { description: data.get('departure-place') },
      arrive: { description: data.get('arrival-place') },
      load: { description: 'Unknown load' },
      date: dateString.substring(0, 10),
      time: dateString.substring(11, dateString.length - 1),
      vehicle: data.get('trip-vehicle'),
      crew: data.get('trip-crew'),
    }
    if (validateTrip(tripData)) {
      realtimeData.addTrip(tripData);
      toggle();
    } else {
      alert('Cannot add the trip.')
    }
  }

  const startTrip = (trip) => {
    return;
  }

  const cancelTrip = (trip) => {
    return;
  }

  return (
    <div className="panel-with-sidebar">
      <h3>Trip maintenance</h3>
      <Card id='trip-admin-page-container'>
        <CardHeader>
          <Button onClick={toggle}>Add Trip</Button>
        </CardHeader>
        <CardBody>

          <Table id='vehicle-table' responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Departing from</th>
                <th>Arriving at</th>
                <th>Vehicle</th>
                <th>Crew</th>
                <th>Start</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {
                realtimeData.trips.map((trip, idx) => {
                  console.log(trip);
                  return (
                    <tr key={idx}>
                      <td>{`${trip.date} @ ${trip.time.substring(0, 5)}`}</td>
                      <td>{trip.depart.description}</td>
                      <td>{trip.arrive.description}</td>
                      <td>{trip.vehicle}</td>
                      <td>{trip.crew}</td>
                      <td>
                        <FontAwesomeIcon
                          icon='hourglass-start'
                          style={{ color: 'rgb(50, 255, 100)', marginRight: '5px', cursor: 'pointer' }}
                          onClick={() => { startTrip(trip) }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon
                          icon='ban'
                          style={{ color: 'rgb(255, 50, 50)', marginRight: '5px', cursor: 'pointer' }}
                          onClick={() => { cancelTrip(trip) }}
                        />
                      </td>
                    </tr>
                  )
                }
                )
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Modal id='add-trip-modal' isOpen={isOpen} toggle={toggle} className={props.className || ''}>
        <ModalHeader toggle={toggle}>Add an appointment:</ModalHeader>
        <Form id='trip-form' autoComplete='off' onSubmit={addTrip} ref={tripFormRef}>
          <ModalBody>
            <InputGroup className='indent'>
              <InputGroupText>Owner</InputGroupText>
              <Select
                id='trip-owner-select'
                inputId='trip-owner-select-input'
                className='modal-select-input'
                name='trip-owner'
                options={ownerOptions}
                onChange={ownerChanged}
              />
            </InputGroup>
            <InputGroup className='indent'>
              <InputGroupText>Vehicle</InputGroupText>
              <Select id='trip-vehicle-select' inputId='trip-vehicle-select-input' className='modal-select-input' name='trip-vehicle' options={vehicleOptions} />
            </InputGroup>
            <InputGroup className='indent'>
              <InputGroupText>Crew</InputGroupText>
              <Select id='trip-crew-select' inputId='trip-crew-select-input' className='modal-select-input' name='trip-crew' options={crewOptions} />
            </InputGroup>
            <InputGroup className='indent'><InputGroupText>From:</InputGroupText><Input name='departure-place' type='search' placeholder='place of departure'></Input></InputGroup>
            <InputGroup className='indent'><InputGroupText>To:</InputGroupText><Input name='arrival-place' type='search' placeholder='place of arrival'></Input></InputGroup>
            <InputGroup className='indent'><InputGroupText>Date:</InputGroupText><Input id='appointment-date-picker' name='appointment-date' type='datetime-local' ></Input></InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  )
};

export default TripAdminPage;
