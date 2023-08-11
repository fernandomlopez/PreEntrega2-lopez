import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import CartWidget from './cartWidget';
import './navbar.css';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to={'/'}>FM Indum</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navPro">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/categoria/camperas'>Camperas</NavLink>
            <NavLink to='/categoria/camisacos'>Camisacos</NavLink>
            <NavLink to='/categoria/buzos'>Buzos</NavLink>
            <NavLink to='/categoria/remeras'>Remeras</NavLink>
            <NavLink to='/categoria/pantalones'>Pantalones</NavLink>
            <NavLink to='/cart'>< CartWidget /></NavLink>
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


