import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  FormGroup,
  FormText,
  Container,
  Alert,
} from "reactstrap";

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [authBusy, setAuthBusy] = useState(false);

  let from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError('');
      setAuthBusy(true);
      await auth.signin((email, password), () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      });
    } catch (error) {
      setError('Could not log in.');
    } finally {
      setAuthBusy(false);
    }
  }

  return (
    <>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "400px", marginBottom: "15%" }}>
          <Card>
            <CardBody>
              <h5 className='text-center mb-4'><small>Please sign in with your email and password</small></h5>
              {error && <Alert color='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <FormGroup id='email'>
                  <FormText>Email</FormText>
                  <Input type='email' ref={emailRef} required></Input>
                </FormGroup>
                <FormGroup id='password'>
                  <FormText>Password</FormText>
                  <Input type='password' ref={passwordRef} required></Input>
                </FormGroup>
                <Button id="login-button" type='submit' className='w-100' disabled={authBusy} >Submit</Button>
              </Form>
            </CardBody>
          </Card>
          <div className='w-100 text-center mt-2'>Sign up</div>
        </div>
      </Container>
    </>
  );
}

export default LoginPage;
