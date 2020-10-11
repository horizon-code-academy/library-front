import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth";

const Header = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="/">
          {"📕 "}
          Library app
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/books">Books</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
        </Nav>
        {!token ? (
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>
          </Nav>
        )}
      </Navbar>
    </>
  );
};

export default Header;
