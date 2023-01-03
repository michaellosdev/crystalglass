import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'


function TopNav() {
  return (
    <>
     <Navbar  expand="lg"    className='shadow-lg p-3 bg-white rounded'>
      <Container className='container-fluid '>
                    <Navbar.Brand><img src={Logo} width='64px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Container className='d-flex justify-content-center text-center  '  >
            <Nav>
                <Nav.Link className='mx-2 text-uppercase font-size-2'  href='#home'> Home</Nav.Link>
                <Nav.Link className='mx-2 text-uppercase font-size-2' href='#services'> Services</Nav.Link>
                <Nav.Link className='mx-2 text-uppercase font-size-2' href='#portfolio'> Portfolio</Nav.Link>   
                <Nav.Link className='mx-2 text-uppercase font-size-2' href='#contact'>Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  )
}

export default TopNav