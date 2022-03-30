import React, { useState, useRef } from 'react';
import { Button, Card, CardBody, CardHeader, Form, Input, InputGroup, InputGroupText, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useAuth } from '../context/AuthContext';
import { useRealtimeData } from '../context/RealtimeDataContext';

const TripAdminPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const journeyFormRef = useRef();

  const { currentUser } = useAuth();
  const realtimeData = useRealtimeData();

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="panel-with-sidebar">
      <h3>Trip maintenance</h3>
      <Card id='trip-admin-page-container'>
        <CardHeader>
          <Button onClick={toggle}>Add journey</Button>
        </CardHeader>
        <CardBody>

        </CardBody>
      </Card>

      <Modal id='add-journey-modal' isOpen={isOpen} toggle={toggle} className={props.className || ''}>
        <ModalHeader toggle={toggle}>Submit a vehicle:</ModalHeader>
        <Form id='journey-form' autoComplete='off' onSubmit={() => { }} ref={journeyFormRef}>
          <ModalBody>
            <InputGroup><InputGroupText>Vehicle</InputGroupText><Input name='journey-vehicle' type='search'></Input></InputGroup>
            <InputGroup><InputGroupText>Crew</InputGroupText><Input name='journey-crew' type='search'></Input></InputGroup>
            <Label>Departure:</Label>
            <InputGroup className='indent'><InputGroupText>Place:</InputGroupText><Input name='departure-place' type='search'></Input></InputGroup>
            <InputGroup className='indent'><InputGroupText>Time:</InputGroupText><Input name='departure-time' type='search'></Input></InputGroup>
            <Label>Arrival:</Label>
            <InputGroup className='indent'><InputGroupText>Place:</InputGroupText><Input name='arrival-place' type='search'></Input></InputGroup>
            <InputGroup className='indent'><InputGroupText>Time:</InputGroupText><Input name='arrival-time' type='search'></Input></InputGroup>
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
