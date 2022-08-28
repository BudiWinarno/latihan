import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logoImg from "../assets/logo.png";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logoImg}
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
              alt="React Bootstrap logo"
            />
            Latihan
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
