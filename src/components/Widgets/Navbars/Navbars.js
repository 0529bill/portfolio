import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './index.css';
import i18n from '@Lang/i18n/i18n';
function Navbars({ state }) {
  let a = i18n();
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="/">Bill</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="nav-link" href="/">
            <span>{a('frontend.local.nav.home')}</span>
          </Nav.Link>
          <Nav.Link className="nav-link" href="/About">
            <span>{a('frontend.local.nav.about')}</span>
          </Nav.Link>
          <Nav.Link className="nav-link" href="/Projects">
            <span>{a('frontend.local.nav.projects')}</span>
          </Nav.Link>
          <Nav.Link href="/Resume">
            <span>{a('frontend.local.nav.resume')}</span>
          </Nav.Link>
          <Nav.Link href="/Settings">
            <span>{a('frontend.local.nav.settings')}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbars;
