import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import axios from 'axios';

const UserAdminPage = () => {

  const [pagingTokens, setPagingTokens] = useState([]);
  const [users, setUsers] = useState([]);
  const apiEndpoint = 'https://us-central1-malayicha-zonke.cloudfunctions.net/graphql'; //'http://localhost:8800/';

  useEffect(() => {
    if (users.length === 0)
      retrievePageOfUsers('next');
  })

  const retrievePageOfUsers = async (direction) => {
    const data = {
      query: `{
        pageOfUsers { pageToken, users { uid, email, customClaims { admin } }}
      }`,
    };

    try {
      const response = await axios({
        method: 'post',
        url: `${apiEndpoint}`,
        data
      });
      const responseData = response.data.data.pageOfUsers;
      if (responseData.pageToken !== pagingTokens[pagingTokens.length - 1]) {
        const updatedTokenList = [...pagingTokens, responseData.pageToken];
        setPagingTokens(updatedTokenList);
      }
      setUsers(responseData.users);
    } catch (error) {
      console.log(error.message);
    }
  }

  const setUserDisabled = async (uid, disabled) => {
    const data = {
      query: `mutation{ setUserDisabled (uid: "${uid}", disabled: ${disabled ? 'true' : 'false'}) }`,
    };

    try {
      const response = await axios({
        method: 'post',
        url: `${apiEndpoint}`,
        data
      });
      if (response) {
        const updatedUsers = [...users];
        const index = updatedUsers.findIndex(user => user.uid === uid);
        updatedUsers[index].disabled = disabled;
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const setUserAdmin = async (uid, isAdmin) => {
    const data = {
      query: `mutation{ setCustomUserClaims (uid: "${uid}", claimsJSON: "{ \\"admin\\":${isAdmin ? 'true' : 'false'} }") }`,
    };

    try {
      const response = await axios({
        method: 'post',
        url: `${apiEndpoint}`,
        data
      });
      if (response) {
        const updatedUsers = [...users];
        const index = updatedUsers.findIndex(user => user.uid === uid);
        updatedUsers[index].customClaims.admin = isAdmin;
        setUsers(updatedUsers);
      }
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
                <th>Active</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.email}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={user.disabled ? 'minus-circle' : 'check-circle'}
                          style={{ marginRight: '5px', cursor: 'pointer', color: user.disabled ? 'red' : 'green' }}
                          onClick={() => { setUserDisabled(user.uid, !user.disabled) }}
                        />
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={user.customClaims.admin ? 'check-circle' : 'minus-circle'}
                          style={{ marginRight: '5px', cursor: 'pointer', color: user.customClaims.admin ? 'green' : 'red' }}
                          onClick={() => { setUserAdmin(user.uid, !user.customClaims.admin) }}
                        />
                      </td>
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

