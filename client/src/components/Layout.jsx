import React from 'react'
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TopNav from './TopNav';

function Layout() {
  return (
    <>
    <Outlet />
    </>
    
  )
}

export default Layout