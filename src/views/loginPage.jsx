import React, { useRef, useState, useEffect } from 'react';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
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
  Collapse,
} from "reactstrap";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Register');
  const [authBusy, setAuthBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const emailRef = useRef(null);
  const passwordRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const verifyRegisterPasswordRef = useRef();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    setLoading(false);
    if (auth.user && !loading) return <Navigate to={from} />
  }, [auth, loading, from]);


  const handleSignInWithEmailSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError('');
      setAuthBusy(true);
      const signInResult = await auth.signin(email, password);
      if (signInResult.user) {
        navigate('/');
      };
    } catch (error) {
      console.log('An error occurred trying to log in.');
    } finally {
      setAuthBusy(false);
    }
  }

  async function handleRegisterSubmit(event) {
    event.preventDefault();

    const registerEmail = registerEmailRef.current.value;
    const registerPassword = registerPasswordRef.current.value;
    const verifyRegisterPassword = verifyRegisterPasswordRef.current.value;

    if (registerPassword !== verifyRegisterPassword) {
      return setError('The entered passwords do not match.');
    }

    try {
      setError('');
      setAuthBusy(true);
      let signUpResult = await auth.signup(registerEmail, registerPassword);
      if (signUpResult.user) {
        navigate(from, { replace: true });
      };
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError('A user with this email address already exists.  Click the link to reset your password if you have forgotten your login details.');
          break;
        default:
          setError('Could not register user.');
      }
    } finally {
      setAuthBusy(false);
    }
  }

  async function registerButtonClick(event) {
    event.preventDefault();
    setOpen(!open);
    setButtonText(buttonText === 'Register' ? 'Sign in' : 'Register');
    setError('');
  }

  return (
    <>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "400px", marginBottom: "15%" }}>
          <Collapse isOpen={!open}>
            <Card>
              <CardBody>
                <h5 className='text-center mb-4'><small>Please sign in with your email and password</small></h5>
                {error && <Alert color='danger'>{error}</Alert>}
                <Form onSubmit={handleSignInWithEmailSubmit}>
                  <FormGroup id='email'>
                    <FormText>Email</FormText>
                    <Input type='email' innerRef={emailRef} ></Input>
                  </FormGroup>
                  <FormGroup id='password'>
                    <FormText>Password</FormText>
                    <Input type='password' innerRef={passwordRef} ></Input>
                  </FormGroup>
                  <Button id="login-button" type='submit' className='w-100' disabled={authBusy} >Submit</Button>
                </Form>
                <div className='w-100 text-center mt-2'>
                  <Link to='/reset-password'>Reset password</Link>
                </div>
              </CardBody>
            </Card>
          </Collapse>
          <div className='w-100 text-center m-3'>
            <Button
              onClick={registerButtonClick}
            >
              {buttonText}
            </Button>
          </div>
          <Collapse isOpen={open}>
            <div id="example-collapse-text">
              <Card>
                <CardBody>
                  <h5 className='text-center mb-4'><small>Please sign in with your email and password</small></h5>
                  {error && <Alert color='danger'>{error}</Alert>}
                  <Form onSubmit={handleRegisterSubmit}>
                    <FormGroup id='email'>
                      <FormText>Email</FormText>
                      <Input type='email' innerRef={registerEmailRef} required></Input>
                    </FormGroup>
                    <FormGroup id='password'>
                      <FormText>Password</FormText>
                      <Input type='password' innerRef={registerPasswordRef} required></Input>
                    </FormGroup>
                    <FormGroup id='verify-password'>
                      <FormText>Verify password</FormText>
                      <Input type='password' innerRef={verifyRegisterPasswordRef} required></Input>
                    </FormGroup>
                    <Button id="register-button" type='submit' className='w-100' disabled={authBusy} >Submit</Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Collapse>
        </div>
      </Container>
    </>
  );
}

export default LoginPage;
