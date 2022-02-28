import React, { useState, useRef } from 'react';
import { Button, Card, CardBody, CardHeader, Form, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import { useAuth } from '../context/AuthContext';
import { useRealtimeData } from '../context/RealtimeDataContext';

const VehiclesPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [vehicle, setVehicle] = useState({});
  const { user } = useAuth();
  const realtimeData = useRealtimeData();
  const vehicleFormRef = useRef();

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const formDataChanged = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.name;
    let newVehicle = {};
    switch (name) {
      case 'vehicle-owner-id':
        newVehicle = { ...vehicle, ownerId: value };
        setVehicle(newVehicle);
        break;
      case 'vehicle-make':
        newVehicle = { ...vehicle, make: value };
        setVehicle(newVehicle);
        break;
      case 'vehicle-model':
        newVehicle = { ...vehicle, model: value };
        setVehicle(newVehicle);
        break;
      case 'vehicle-registration':
        newVehicle = { ...vehicle, registration: value };
        setVehicle(newVehicle);
        break;
      case 'vehicle-capacity':
        newVehicle = { ...vehicle, capacity: value };
        setVehicle(newVehicle);
        break;
      case 'vehicle-location':
        newVehicle = { ...vehicle, location: value };
        setVehicle(newVehicle);
        break;
      default:
    }
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

  return (
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
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>Isuzu</td>
                <td>D-Max</td>
                <td>AAA999GP</td>
                <td>8T</td>
                <td>Germiston</td>
              </tr> */}
              {
                realtimeData.vehicles.map(vehicle =>
                  <tr>
                    <td>{vehicle.make}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.registration}</td>
                    <td>{vehicle.capacity}</td>
                    <td>{vehicle.location}</td>
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
              <select name='vehicle-owner-id' className='form-control' defaultValue={user.uid} onChange={formDataChanged}>
                <option value={user.uid}>{user.email}</option>
                <option value='jkls45d7jaf9lfjdls123aj'>rjbenadie70@gmail.com</option>
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

    </div>
  )
}

export default VehiclesPage;
