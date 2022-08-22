import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from '../logo.svg';

export const TodoNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <Logo  
          width="28"
          height="28"
          fill="#d6d6d6"
          className="d-inline-block align-top"
        />{' '}
        Todo App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
