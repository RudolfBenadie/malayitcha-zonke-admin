import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Form, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import { useAuth } from '../context/AuthContext';
import { useRealtimeData } from '../context/RealtimeDataContext';
import axios from 'axios';

const UserAdminPage = () => {

  const auth = useAuth();
  const [pagingTokens, setPagingTokens] = useState([]);
  const [users, setUsers] = useState([]);
  const apiEndpoint = 'https://us-central1-malayicha-zonke.cloudfunctions.net/graphql';

  useEffect(() => {
    if (users.length === 0)
      retrievePageOfUsers('next');
  })

  const retrievePageOfUsers = async (direction) => {
    const data = {
      query: `{
        pageOfUsers { pageToken, users { uid, email }}
      }`,
    };

    try {
      const response = await axios({
        method: 'post',
        url: `${apiEndpoint}`,
        data
      });
      const responseData = response.data.data.pageOfUsers;
      const updatedTokenList = [...pagingTokens, responseData.pageToken];
      setPagingTokens(updatedTokenList);
      setUsers(responseData.users);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="panel-with-sidebar">
      <h3>Fleet vehicle maintenance</h3>
      <Card id='users-page-container'>
        <CardHeader>
          User management
        </CardHeader>

        <CardBody>
          <Table id='users-table' responsive>
            <thead>
              <tr>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => {
                  return (
                    <tr>
                      <td key={index}>{user.email}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>

  )
}

export default UserAdminPage

