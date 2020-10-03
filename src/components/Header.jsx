import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => (
  <>
    <Navbar bg="light">
      <Navbar.Brand href="/">
        <span role="img" aria-label="book">
          📕
        </span>
        Library app
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/books">Books</Nav.Link>
        <Nav.Link href="/students">Students</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
      </Nav>
    </Navbar>
  </>
);

export default Header;
