import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import axios from 'axios';
import { useRealtimeData } from '../context/RealtimeDataContext';
import { useAuth } from '../context/AuthContext';

const UserAdminPage = () => {
  const { currentUser } = useAuth();
  const realtimeData = useRealtimeData();
  const [pagingTokens, setPagingTokens] = useState([]);
  const [users, setUsers] = useState([]);
  const apiEndpoint = 'https://us-central1-malayicha-zonke.cloudfunctions.net/graphql';
  //const apiEndpoint = 'http://localhost:8800/';

  useEffect(() => {
    if (users.length === 0)
      retrievePageOfUsers('next');
  }, []);

  const retrievePageOfUsers = async (direction) => {
    const data = {
      query: `{
        pageOfUsers { pageToken, users { uid, email, customClaims { admin, owner, crew } }}
      }`,
    };

    try {
      const response = await axios({
        method: 'post',
        url: `${apiEndpoint}`,
        headers: {
          authorisation: currentUser.stsTokenManager.accessToken,
        },
        data,
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

  const setUserDisabled = async (user, disabled) => {
    const data = {
      query: `mutation{ setUserDisabled (uid: "${user.uid}", disabled: ${disabled ? 'true' : 'false'}) }`,
    };

    try {
      const response = await axios({
        method: 'post',
        url: `${apiEndpoint}`,
        headers: {
          authorisation: currentUser.stsTokenManager.accessToken,
        },
        data,
      });
      if (response) {
        const updatedUsers = [...users];
        const index = updatedUsers.findIndex(updateUser => updateUser.uid === user.uid);
        updatedUsers[index].disabled = disabled;
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const setUserAdmin = async (user, isAdmin) => {
    const data = {
      query: `
      mutation{ 
        setCustomUserClaims (
          uid: "${user.uid}", 
          claimsJSON: "{\\"admin\\":${isAdmin ? 'true' : 'false'},\\"owner\\":${user.customClaims.owner ? 'true' : 'false'},\\"crew\\":${user.customClaims.crew ? 'true' : 'false'}}"
        ) 
      }
      `,
    };

    try {
      const response = await axios({
        method: 'post',
        url: `${apiEndpoint}`,
        headers: {
          authorisation: currentUser.stsTokenManager.accessToken,
        },
        data,
      });
      if (response) {
        const updatedUsers = [...users];
        const index = updatedUsers.findIndex(updateUser => updateUser.uid === user.uid);
        updatedUsers[index].customClaims.admin = isAdmin;
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const setUserCrew = async (user, isCrew) => {
    const data = {
      query: `
      mutation{ 
        setCustomUserClaims (
          uid: "${user.uid}", 
          claimsJSON: "{\\"admin\\":${user.customClaims.admin ? 'true' : 'false'},\\"owner\\":${user.customClaims.owner ? 'true' : 'false'},\\"crew\\":${isCrew ? 'true' : 'false'}}"
        ) 
      }
      `,
    };

    try {
      const response = await axios({
        method: 'post',
        url: `${apiEndpoint}`,
        headers: {
          authorisation: currentUser.stsTokenManager.accessToken,
        },
        data,
      });
      if (response) {
        const updatedUsers = [...users];
        const index = updatedUsers.findIndex(updateUser => updateUser.uid === user.uid);
        updatedUsers[index].customClaims.crew = isCrew;
        setUsers(updatedUsers);
        if (isCrew) {
          realtimeData.addCrew(user)
        } else {
          realtimeData.deleteCrew(user);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const setUserOwner = async (user, isOwner) => {
    const data = {
      query: `
      mutation{ 
        setCustomUserClaims (
          uid: "${user.uid}", 
          claimsJSON: "{\\"admin\\":${user.customClaims.admin ? 'true' : 'false'},\\"owner\\":${isOwner ? 'true' : 'false'},\\"crew\\":${user.customClaims.crew ? 'true' : 'false'}}"
        ) 
      }
      `,
    };

    try {
      const response = await axios({
        method: 'post',
        url: `${apiEndpoint}`,
        headers: {
          authorisation: currentUser.stsTokenManager.accessToken,
        },
        data,
      });
      if (response) {
        const updatedUsers = [...users];
        const index = updatedUsers.findIndex(updateUser => updateUser.uid === user.uid);
        updatedUsers[index].customClaims.owner = isOwner;
        setUsers(updatedUsers);
        if (isOwner) {
          await realtimeData.addOwner(user);
        } else {
          await realtimeData.deleteOwner(user);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="panel-with-sidebar">
      <h3>User maintenance</h3>
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
                <th>Owner</th>
                <th>Crew</th>
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
                          onClick={() => { setUserDisabled(user, !user.disabled) }}
                        />
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={user.customClaims.owner ? 'check-circle' : 'minus-circle'}
                          style={{ marginRight: '5px', cursor: 'pointer', color: user.customClaims.owner ? 'green' : 'red' }}
                          onClick={() => { setUserOwner(user, !user.customClaims.owner) }}
                        />
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={user.customClaims.crew ? 'check-circle' : 'minus-circle'}
                          style={{ marginRight: '5px', cursor: 'pointer', color: user.customClaims.crew ? 'green' : 'red' }}
                          onClick={() => { setUserCrew(user, !user.customClaims.crew) }}
                        />
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={user.customClaims.admin ? 'check-circle' : 'minus-circle'}
                          style={{ marginRight: '5px', cursor: 'pointer', color: user.customClaims.admin ? 'green' : 'red' }}
                          onClick={() => { setUserAdmin(user, !user.customClaims.admin) }}
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

export default UserAdminPage;
