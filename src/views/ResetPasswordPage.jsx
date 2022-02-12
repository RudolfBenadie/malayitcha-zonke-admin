import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
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

const ResetPasswordPage = () => {
  let auth = useAuth();
  const emailRef = useRef();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [authBusy, setAuthBusy] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;

    try {
      setMessage('');
      setError('');
      setAuthBusy(true);
      await auth.resetPassword(email);
      setMessage('Check your inbox for further instruction,')
    } catch (error) {
      setError('Failed to reset password.');
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
              <h5 className='text-center mb-4'><small>Enter your email to reset your password</small></h5>
              {error && <Alert color='danger'>{error}</Alert>}
              {message && <Alert color='success'>{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <FormGroup id='email'>
                  <FormText>Email</FormText>
                  <Input type='email' ref={emailRef} required></Input>
                </FormGroup>
                <Button id="reset-password-button" type='submit' className='w-100' disabled={authBusy} >Submit</Button>
              </Form>
              <div className='w-100 text-center mt-2'>
                <Link to='/login'>Sign in</Link>
              </div>
            </CardBody>
          </Card>
          <div className='w-100 text-center mt-2'>Sign up</div>
        </div>
      </Container>
    </>
  );
}

export default ResetPasswordPage;
