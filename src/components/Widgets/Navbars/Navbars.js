import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './index.css';
import i18n from '@Lang/i18n/i18n';
function Navbars({ state, locationDispatch, locationState }) {
  let a = i18n();

  useEffect(() => {
    locationDispatch({
      type: 'SET_LOCATION',
      payload: window.location.pathname,
    });
  }, []);

  const content = {
    color: 'white',
    '&::after': {
      background: 'white',
    },
  };

  const test = {
    color: 'green',
  };
  return (
    <div
      style={
        locationState.location === '/portfolio/About' ||
        locationState.location === '/portfolio/Resume'
          ? { backgroundColor: 'white', color: 'black' }
          : {
              backgroundColor: 'black',
              color: 'white',
            }
      }
    >
      <Navbar
        collapseOnSelect
        expand="sm"
        // bg="transparent"
        variant="dark"
        // style={{
        //   color: 'black !important',
        // }}
        className="navbar-dark"
      >
        <Navbar.Brand
          className="nav-brand"
          href="/portfolio"
          style={
            locationState.location === '/portfolio/About' ||
            locationState.location === '/portfolio/Resume'
              ? { color: 'black' }
              : { color: 'white' }
          }
        >
          Bill
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          // variant="dark"
          // bg="transparent"
          className="navbar_hamburger"
          style={
            locationState.location === '/portfolio/About' ||
            locationState.location === '/portfolio/Resume'
              ? { backgroundColor: 'black' }
              : null
          }
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-link" href="/portfolio">
              <span
                style={
                  locationState.location === '/portfolio/About' ||
                  locationState.location === '/portfolio/Resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.home')}
              </span>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/portfolio/About">
              <span
                style={
                  locationState.location === '/portfolio/About' ||
                  locationState.location === '/portfolio/Resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.about')}
              </span>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/portfolio/Projects">
              <span
                style={
                  locationState.location === '/portfolio/About' ||
                  locationState.location === '/portfolio/Resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.projects')}
              </span>
            </Nav.Link>
            <Nav.Link href="/portfolio/Resume">
              <span
                style={
                  locationState.location === '/portfolio/About' ||
                  locationState.location === '/portfolio/Resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.resume')}
              </span>
            </Nav.Link>
            <Nav.Link href="/portfolio/Settings">
              <span
                style={
                  locationState.location === '/portfolio/About' ||
                  locationState.location === '/portfolio/Resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.settings')}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navbars;
