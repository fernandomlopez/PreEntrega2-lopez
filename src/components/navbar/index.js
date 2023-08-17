import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import CartWidget from '../cartwidget';
import './index.css';

export const NavBar = () => {
  return (
    <Navbar className='navProContain' collapseOnSelect expand="lg" bg="tertiary" data-bs-theme="tertiary">
      <Container>
        <Navbar><h3 className="marca">FLMZ</h3></Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navPro">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/categoria/camperas'>Camperas</NavLink>
            <NavLink to='/categoria/camisacos'>Camisacos</NavLink>
            <NavLink to='/categoria/buzos'>Buzos</NavLink>
            <NavLink to='/categoria/remeras'>Remeras</NavLink>
            <NavLink to='/categoria/pantalones'>Pantalones</NavLink>
          </Nav>
          <Nav className="navPro">
            <NavLink to='/cart'>< CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;


