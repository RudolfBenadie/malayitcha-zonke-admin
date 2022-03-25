import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import { useRealtimeData } from '../context/RealtimeDataContext';

import 'react-bootstrap-typeahead/css/Typeahead.css';

const CrewAdminPage = () => {
  const realtimeData = useRealtimeData();
  const [currentOwner, setCurrentOwner] = useState(null);
  const [owners, setOwners] = useState([]);
  const [availableCrew, setAvailableCrew] = useState([]);

  useEffect(() => {
    const ownerList = realtimeData.owner.reduce((list, item, index) => {
      list.push({ id: item[0], label: item[1].name })
      return list;
    }, [])
    console.log(ownerList);
    setOwners(ownerList);
  }, [])

  const ownerChanged = (selected) => {
    setCurrentOwner(selected);
    const crewList = realtimeData.crew;
    setAvailableCrew(crewList);
  }

  return (
    <div className="panel-with-sidebar">
      <h3>Crew maintenance</h3>
      <Card id='vehicle-page-container'>
        <CardHeader>
          <h5>Assign crew to vehicle owners</h5>
        </CardHeader>
        <CardBody>
          <Typeahead
            id='owner-list'
            onChange={ownerChanged}
            options={owners}
            placeholder="Select a vehicle owner"
          >
          </Typeahead>
          <div style={{ margin: 5, height: '90%' }}>
            <Card style={{ height: '100%' }}>
              <CardBody style={{ display: 'flex' }}>
                <div style={{ flex: 1, border: '1px solid black', maxWidth: '400px', }}>
                  <Table hover>
                    <tbody >
                      {
                        availableCrew.map((member, index) => {
                          return <tr key={index}><td>{member[1].name}</td></tr>
                        })
                      }
                    </tbody>
                  </Table>
                </div>
                <div style={{ flex: 1, maxWidth: '100px', }}></div>
                <div style={{ flex: 1, border: '1px solid black', maxWidth: '400px', }}></div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default CrewAdminPage
