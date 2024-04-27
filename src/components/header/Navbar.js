import React from 'react';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Navbr() {
    return (
        <div className="Navbr">
        <Navbar expand="lg" className="bg-primary" style={{ padding: '0 0' }}>
          <Container>
            <Navbar.Brand href="#home" style={{ fontSize: '1.5rem' }}>SEMHS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Courses</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    );
}
export default Navbr;
