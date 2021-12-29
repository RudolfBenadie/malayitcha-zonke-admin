import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <div id="login-container">
      <Card>
        <CardBody>
          <CardTitle tag="h3">Sign in</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Please provide your username and password to sign in.
          </CardSubtitle>
          <form onSubmit={handleSubmit}>
            <div id="login-iput-content">
              <InputGroup>
                <InputGroupText>Username</InputGroupText>
                <Input name="username"></Input>
              </InputGroup>
              <InputGroup>
                <InputGroupText>Password</InputGroupText>
                <Input name="password"></Input>
              </InputGroup>
              <Button id="login-button">Login</Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default LoginPage;
