import CartWidget from './cartWidget';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';

export const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to={'/'}>FM Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to={'/'}>Home</Nav.Link>
            <Nav.Link to={'/categoria'}>Camperas</Nav.Link>
            <Nav.Link to={'/categoria'}>Camisacos</Nav.Link>
            <Nav.Link to={'/categoria'}>Abrigos</Nav.Link>
            <Nav.Link to={'/categoria'}>Buzos</Nav.Link>
            <Nav.Link to={'/categoria'}>Remeras</Nav.Link>
            <Nav.Link to={'/categoria'}>Pantalones</Nav.Link>
            <Nav.Link to={'/cart'}>< CartWidget /></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contactanos</Nav.Link>
            <Nav.Link href="#deets">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar; 


