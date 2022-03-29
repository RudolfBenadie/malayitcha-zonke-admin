import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Card, CardBody, CardColumns, CardHeader, Table } from 'reactstrap';
import { useRealtimeData } from '../context/RealtimeDataContext';

import 'react-bootstrap-typeahead/css/Typeahead.css';

const CrewAdminPage = () => {
  const realtimeData = useRealtimeData();
  const [currentOwner, setCurrentOwner] = useState(null);
  const [owners, setOwners] = useState([]);
  const [availableCrew, setAvailableCrew] = useState([]);
  const [assignedCrew, setAssignedCrew] = useState([]);

  useEffect(() => {
    const ownerList = realtimeData.owner.reduce((list, item, index) => {
      list.push({ id: item[0], label: item[1].name })
      return list;
    }, [])
    console.log(ownerList);
    setOwners(ownerList);
  }, [])

  const ownerChanged = (selected) => {
    if (selected.length > 0) {
      setCurrentOwner(selected);
      const availableCrewList = [];
      const assignedCrewList = [];
      for (let member of realtimeData.crew) {
        if (member[0] === selected[0].id || (member[0].assignedTo && member[0].assignedTo !== selected[0].id)) continue
        else if (member[0].assignedTo || member[0].assignedTo === selected[0].id) assignedCrewList.push(member);
        else availableCrewList.push(member);
      }
      setAvailableCrew(availableCrewList);
      setAssignedCrew(assignedCrewList);
    }
  }

  const assignMemberToOwner = async (index, member) => {
    const changedAvailability = [...availableCrew];
    const assignedMember = changedAvailability.splice(index, 1);
    const changedAssigned = [...assignedCrew, ...assignedMember];
    setAvailableCrew(changedAvailability);
    setAssignedCrew(changedAssigned);
    realtimeData.linkCrewToOwner(currentOwner[0], member);
  }

  const removeMemberAssignment = async (index, member) => {
    const changedAssigned = [...assignedCrew];
    const assignedMember = changedAssigned.splice(index, 1);
    const changedAvailability = [...availableCrew, ...assignedMember];
    setAvailableCrew(changedAvailability);
    setAssignedCrew(changedAssigned);
    realtimeData.unlinkCrewFromOwner(currentOwner[0], member);
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
                <div style={{ flex: 1, maxWidth: '400px', }}>
                  <Card style={{ height: '100%' }}>
                    <CardHeader>Available crew</CardHeader>
                    <CardBody>
                      <Table hover responsive size="sm">
                        <tbody >
                          {
                            availableCrew.map((member, index) => {
                              return <tr key={index} onClick={() => { assignMemberToOwner(index, member) }}><td>{member[1].name}</td></tr>
                            })
                          }
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </div>
                <div style={{ flex: 1, maxWidth: '100px', }}></div>
                <div style={{ flex: 1, maxWidth: '400px', }}>
                  <Card style={{ height: '100%' }}>
                    <CardHeader>Assigned crew</CardHeader>
                    <CardBody>
                      <Table hover responsive size="sm">
                        <tbody >
                          {
                            assignedCrew.map((member, index) => {
                              return <tr key={index} onClick={() => { removeMemberAssignment(index, member) }}><td>{member[1].name}</td></tr>
                            })
                          }
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default CrewAdminPage
