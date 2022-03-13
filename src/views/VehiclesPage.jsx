import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';
import { Button, Card, CardBody, CardHeader, Form, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import { useAuth } from '../context/AuthContext';
import { useRealtimeData } from '../context/RealtimeDataContext';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from '../components/GoogleMap';

const VehiclesPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationEditorIsOpen, setLocationEditorIsOpen] = useState(false);
  const [vehicleEditorIsOpen, setVehicleEditorIsOpen] = useState(false);
  const [vehicleEditing, setVehicleEditing] = useState({});

  const { currentUser } = useAuth();
  const realtimeData = useRealtimeData();
  const vehicleFormRef = useRef();
  const vehicleEditFormRef = useRef();
  const vehicleLocationFormRef = useRef();

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <h1>Loading...</h1> //<Spinner />;
      case Status.FAILURE:
        return <h1>Failed...</h1> //<ErrorComponent />;
      case Status.SUCCESS:
        return <GoogleMap />;
      default:
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const toggleEditor = () => {
    setVehicleEditorIsOpen(!vehicleEditorIsOpen);
  }

  const toggleLocationEditor = () => {
    setLocationEditorIsOpen(!locationEditorIsOpen);
  }

  const validateVehicle = (vehicle) => {
    let result = true;
    result = result && !!vehicle.ownerId && !!vehicle.registration && !!vehicle.capacity && !!vehicle.location;
    return result;
  }

  const addVehicle = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const vehicleData = {
      ownerId: data.get('vehicle-owner-id'),
      make: data.get('vehicle-make'),
      model: data.get('vehicle-model'),
      registration: data.get('vehicle-registration'),
      capacity: data.get('vehicle-capacity'),
      location: data.get('vehicle-location'),
    }
    if (validateVehicle(vehicleData)) {
      realtimeData.addVehicle(vehicleData);
      toggle();
    } else {
      alert('Cannot add the vehicle.')
    }
  }

  const deleteVehicle = (vehicle) => {
    realtimeData.deleteVehicle(vehicle.ownerId, vehicle.registration);
  }

  const editVehicle = (vehicle) => {
    setVehicleEditing(vehicle);
    setVehicleEditorIsOpen(true);
  }

  const editVehicleLocation = (vehicle) => {
    if (realtimeData.vehiclesInService && Array.isArray(realtimeData.vehiclesInService)) {
      const currentLocation = realtimeData.vehiclesInService.find(vehicleInService => vehicleInService.registration === vehicle.registration);
      if (currentLocation) {
        realtimeData.setSelectedLocation({ latitude: currentLocation.latitude, longitude: currentLocation.longitude, zoom: 20 });
      }
    }
    setVehicleEditing(vehicle);
    setLocationEditorIsOpen(true);
  }

  const updateVehicle = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const vehicleData = {
      ownerId: data.get('vehicle-owner-id'),
      make: data.get('vehicle-make'),
      model: data.get('vehicle-model'),
      registration: data.get('vehicle-registration'),
      capacity: data.get('vehicle-capacity'),
      location: data.get('vehicle-location'),
    }
    if (validateVehicle(vehicleData)) {
      realtimeData.updateVehicle(vehicleData);
      toggleEditor();
    } else {
      alert('Cannot update the vehicle.')
    }
  }

  const updateVehicleLocation = (e) => {
    e.preventDefault();
    realtimeData.setVehiclesInServiceLocation(vehicleEditing, realtimeData.selectedLocation);
    toggleLocationEditor();
  }

  const disableVehicleInService = (ownerId, vehicle) => {
    const vehicleInServiceIndex = realtimeData.vehiclesInService.findIndex(item => item.registration === vehicle.registration)
    const { latitude, longitude } = realtimeData.vehiclesInService[vehicleInServiceIndex];
    vehicle.lastLocation = { latitude, longitude };
    realtimeData.disableVehicle(ownerId, vehicle);
  }

  const enableVehicleInService = (ownerId, vehicle) => {
    realtimeData.enableVehicle(ownerId, vehicle);
  }

  return (
    <Wrapper apiKey={"AIzaSyAYzDO6KEPv4Lw5SsSS7hhWN026eoBC-u0"} libraries={["places"]} render={render}>
      <div className="panel-with-sidebar">
        <h3>Fleet vehicle maintenance</h3>
        <Card id='vehicle-page-container'>
          <CardHeader>
            <Button onClick={toggle}>Add vehicle</Button>
          </CardHeader>

          <CardBody>
            <Table id='vehicle-table' responsive>
              <thead>
                <tr>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Registration</th>
                  <th>Capacity</th>
                  <th>Base</th>
                  <th>Location</th>
                  <th>Active</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  realtimeData.vehicles.map((vehicle, idx) =>
                    <tr key={idx}>
                      <td>{vehicle.make}</td>
                      <td>{vehicle.model}</td>
                      <td>{vehicle.registration}</td>
                      <td>{vehicle.capacity}</td>
                      <td>{vehicle.location}</td>
                      <td>
                        <FontAwesomeIcon
                          icon='shipping-fast'
                          style={{ color: 'grey', marginRight: '5px', cursor: 'pointer' }}
                          onClick={() => { editVehicleLocation(vehicle) }}
                        />
                      </td>
                      <td>
                        {vehicle.lastLocation ?
                          <FontAwesomeIcon
                            icon='minus-circle'
                            style={{ color: 'red', marginRight: '5px', cursor: 'pointer' }}
                            onClick={() => { enableVehicleInService(vehicle.ownerId, vehicle) }}
                          /> :
                          <FontAwesomeIcon
                            icon='check-circle'
                            style={{ color: 'green', marginRight: '5px', cursor: 'pointer' }}
                            onClick={() => { disableVehicleInService(vehicle.ownerId, vehicle) }}
                          />
                        }
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon
                          icon='pencil-alt'
                          style={{ marginRight: '5px', cursor: 'pointer' }}
                          onClick={() => { editVehicle(vehicle) }}
                        />
                        <FontAwesomeIcon
                          icon='trash'
                          style={{ color: 'red', marginRight: '5px', cursor: 'pointer' }}
                          onClick={() => { deleteVehicle(vehicle) }}
                        />
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </CardBody>
        </Card>

        <Modal id='add-vehicle-modal' isOpen={isOpen} toggle={toggle} className={props.className || ''}>
          <ModalHeader toggle={toggle}>Submit a vehicle:</ModalHeader>
          <Form id='vehicle-form' autoComplete='off' onSubmit={addVehicle} ref={vehicleFormRef}>
            <ModalBody>
              <InputGroup><InputGroupText>Owner ID</InputGroupText>
                <select name='vehicle-owner-id' className='form-control' defaultValue={currentUser.uid}>
                  <option value={currentUser.uid}>{currentUser.email}</option>
                </select>
              </InputGroup>
              <InputGroup><InputGroupText>Make</InputGroupText><Input name='vehicle-make' type='search'></Input></InputGroup>
              <InputGroup><InputGroupText>Model</InputGroupText><Input name='vehicle-model' type='search'></Input></InputGroup>
              <InputGroup><InputGroupText>Registration</InputGroupText><Input name='vehicle-registration' type='search'></Input></InputGroup>
              <InputGroup><InputGroupText>Capacity</InputGroupText><Input name='vehicle-capacity' type='search'></Input></InputGroup>
              <InputGroup><InputGroupText>Location</InputGroupText><Input name='vehicle-location' type='search'></Input></InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">Save</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>

        <Modal id='edit-vehicle-modal' isOpen={vehicleEditorIsOpen} toggle={toggleEditor} className={props.className || ''}>
          <ModalHeader>Update a vehicle:</ModalHeader>
          <Form id='vehicle-form' autoComplete='off' onSubmit={updateVehicle} ref={vehicleEditFormRef}>
            <ModalBody>
              <InputGroup><InputGroupText>Owner ID</InputGroupText>
                <select name='vehicle-owner-id' className='form-control' defaultValue={vehicleEditing.ownerId} >
                  <option value={currentUser.uid}>{currentUser.email}</option>
                </select>
              </InputGroup>
              <InputGroup><InputGroupText>Make</InputGroupText><Input name='vehicle-make' type='search' defaultValue={vehicleEditing.make}></Input></InputGroup>
              <InputGroup><InputGroupText>Model</InputGroupText><Input name='vehicle-model' type='search' defaultValue={vehicleEditing.model}></Input></InputGroup>
              <InputGroup><InputGroupText>Registration</InputGroupText><Input name='vehicle-registration' type='search' defaultValue={vehicleEditing.registration} readOnly></Input></InputGroup>
              <InputGroup><InputGroupText>Capacity</InputGroupText><Input name='vehicle-capacity' type='search' defaultValue={vehicleEditing.capacity}></Input></InputGroup>
              <InputGroup><InputGroupText>Location</InputGroupText><Input name='vehicle-location' type='search' defaultValue={vehicleEditing.location}></Input></InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">Save</Button>{' '}
              <Button color="secondary" onClick={toggleEditor}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>

        <Modal id='set-location-modal' isOpen={locationEditorIsOpen} toggle={toggleLocationEditor} className={props.className || ''}>
          <Form id='vehicle-location-form' autoComplete='off' onSubmit={updateVehicleLocation} ref={vehicleLocationFormRef}>
            <ModalHeader>Set current location for a vehicle:</ModalHeader>
            <ModalBody>
              <GoogleMap />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">Save</Button>{' '}
              <Button color="secondary" onClick={toggleLocationEditor}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    </Wrapper>
  )
}

export default VehiclesPage;
