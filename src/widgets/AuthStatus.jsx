import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";

function AuthStatus() {
  let navigate = useNavigate();

  let [authToggle, setAuthToggle] = useState(false);
  const toggle = () => {
    setAuthToggle(!authToggle);
  };

  function LoginItem() {
    let { user, signout } = useAuth();
    if (!user) {
      return (
        <DropdownItem onClick={() => navigate("/login")}>Sign in</DropdownItem>
      );
    }

    return (
      <DropdownItem
        onClick={() => {
          signout(() => navigate("/"));
        }}
      >
        Sign out
      </DropdownItem>
    );
  }

  function LoginToggle() {
    let { user } = useAuth();
    if (!user) {
      return <DropdownToggle className="nav-profile-button">-</DropdownToggle>;
    }

    return (
      <DropdownToggle className="nav-profile-button">
        {user.isAnonymous ? '-' : user.email.slice(0, 1).toLocaleUpperCase()}
      </DropdownToggle>
    );
  }

  return (
    <Dropdown isOpen={authToggle} toggle={toggle}>
      <LoginToggle />
      <DropdownMenu>
        <DropdownItem header>Account</DropdownItem>
        <LoginItem />
        {/* <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem> */}
        <DropdownItem divider />
        {/* <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}

export default AuthStatus;
