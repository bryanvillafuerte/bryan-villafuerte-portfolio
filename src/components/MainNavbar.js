import React from "react";
import { Navbar, Nav, Image } from 'react-bootstrap/';
import '../sass/main-navbar.scss';
import Logo from '../images/bryanlogowhite.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function MainNavbar() {
  return (
    <Navbar variant="dark" expand="lg" fixed='top'>
      <Navbar.Brand href="/">
        <Image src={Logo} alt='Logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className='ml-auto'>
            <AnchorLink href='#top' className='nav-link'>Home</AnchorLink>
          </Nav.Link>
          <Nav.Link className='ml-auto'>
            <AnchorLink href='#aboutMe' className='nav-link'>About Me</AnchorLink>
          </Nav.Link>
          <Nav.Link className='ml-auto'>
            <AnchorLink href='#myWork' className='nav-link'>My Work</AnchorLink>
          </Nav.Link>
          <Nav.Link className='ml-auto'>
            <AnchorLink href='#contact' className='nav-link'>Contact</AnchorLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;