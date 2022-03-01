import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';
import { Button, Card, CardBody, CardHeader, Form, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import { useAuth } from '../context/AuthContext';
import { useRealtimeData } from '../context/RealtimeDataContext';

const VehiclesPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [vehicleEditorIsOpen, setVehicleEditorIsOpen] = useState(false);
  const [vehicleEditing, setVehicleEditing] = useState({});
  const { user } = useAuth();
  const realtimeData = useRealtimeData();
  const vehicleFormRef = useRef();
  const vehicleEditFormRef = useRef();

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const toggleEditor = () => {
    setVehicleEditorIsOpen(!vehicleEditorIsOpen);
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                realtimeData.vehicles.map(vehicle =>
                  <tr>
                    <td>{vehicle.make}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.registration}</td>
                    <td>{vehicle.capacity}</td>
                    <td>{vehicle.location}</td>
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
              <select name='vehicle-owner-id' className='form-control' defaultValue={user.uid}>
                <option value={user.uid}>{user.email}</option>
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
                <option value={user.uid}>{user.email}</option>
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

    </div>
  )
}

export default VehiclesPage;
