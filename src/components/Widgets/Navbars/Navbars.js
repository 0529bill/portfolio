import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './index.css';
import i18n from '@Lang/i18n/i18n';
function Navbars({ state, locationDispatch, locationState }) {
  let a = i18n();
  let [detectPages, setDetectPages] = useState(locationState.location);

  useEffect(() => {
    locationDispatch({
      type: 'SET_LOCATION',
      payload: detectPages,
    });
  }, [detectPages]);

  console.log('detectpages', detectPages);
  console.log('locationState', locationState);
  return (
    <div
      style={
        detectPages === 'about' || detectPages === 'resume'
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
          onClick={() => setDetectPages('home')}
          href="#/portfolio"
          style={
            detectPages === 'about' || detectPages === 'resume'
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
            detectPages === '#/portfolio/About' ||
            detectPages === '#/portfolio/Resume'
              ? { backgroundColor: 'black', color: 'black' }
              : null
          }
        >
          {/* <span style={{ color: 'black' }}>dksfj</span> */}
          <div></div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="nav-link"
              onClick={() => setDetectPages('home')}
              href="#/portfolio"
            >
              <span
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.home')}
              </span>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="#/portfolio/About"
              onClick={() => setDetectPages('about')}
            >
              <span
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.about')}
              </span>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="#/portfolio/Projects"
              onClick={() => setDetectPages('projects')}
            >
              <span
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.projects')}
              </span>
            </Nav.Link>
            <Nav.Link
              href="#/portfolio/Resume"
              onClick={() => setDetectPages('resume')}
            >
              <span
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.resume')}
              </span>
            </Nav.Link>
            <Nav.Link
              href="#/portfolio/Settings"
              onClick={() => setDetectPages('settings')}
            >
              <span
                style={
                  detectPages === 'about' || detectPages === 'resume'
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
