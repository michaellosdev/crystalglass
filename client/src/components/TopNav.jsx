import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'


function TopNav() {
  return (
    <>
     <Navbar  expand="lg"  fixed='top'  className='shadow-lg p-3 mb-5 bg-white rounded'>
      <Container className='container-fluid '>
                    <Navbar.Brand><img src={Logo} width='64px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Container className='d-flex justify-content-center text-center ' >
            <Nav>
                <Nav.Link className='mx-2 text-uppercase font-size-2'> <NavLink to="/">Home</NavLink></Nav.Link>
                <Nav.Link className='mx-2 text-uppercase font-size-2'> <NavLink to="/portfolio">Portfolio</NavLink></Nav.Link>   
                <Nav.Link className='mx-2 text-uppercase font-size-2'> <NavLink to="/services">Services</NavLink></Nav.Link>
                <Nav.Link className='mx-2 text-uppercase font-size-2'> <NavLink to="/contact">Contact</NavLink></Nav.Link>
            </Nav>
            </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  )
}

export default TopNav