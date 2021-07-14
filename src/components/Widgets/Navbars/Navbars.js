import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './index.css';
import i18n from '@Lang/i18n/i18n';
function Navbars({
  state,
  locationDispatch,
  locationState,
  dispatch,
  setLoad,
}) {
  let a = i18n();
  let [detectPages, setDetectPages] = useState(locationState.location);

  useEffect(() => {
    locationDispatch({
      type: 'SET_LOCATION',
      payload: detectPages,
    });
  }, [detectPages]);

  let handleEnglish = () => {
    setLoad(true);
    dispatch({ type: 'SET_LANGUAGE', payload: 'en' });
  };

  let handleChinese = () => {
    setLoad(true);
    dispatch({ type: 'SET_LANGUAGE', payload: 'tw' });
  };
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
          className="navbar_hamburger"
          style={
            detectPages === '#/portfolio/About' ||
            detectPages === '#/portfolio/Resume'
              ? { backgroundColor: 'black', color: 'black' }
              : null
          }
        >
          <div></div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="nav-link"
              onClick={() => setDetectPages('home')}
              href="#/portfolio"
            >
              <a
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.home')}
              </a>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="#/portfolio/About"
              onClick={() => setDetectPages('about')}
            >
              <a
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.about')}
              </a>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="#/portfolio/Projects"
              onClick={() => setDetectPages('projects')}
            >
              <a
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.projects')}
              </a>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="#/portfolio/Resume"
              onClick={() => setDetectPages('resume')}
            >
              <a
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
              >
                {a('frontend.local.nav.resume')}
              </a>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={{ display: 'inline !important' }}
            >
              <a
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
                onClick={() => handleChinese()}
              >
                中文
              </a>
              <a
                style={
                  detectPages === 'about' || detectPages === 'resume'
                    ? { color: 'black' }
                    : { color: 'white' }
                }
                onClick={() => handleEnglish()}
              >
                /English
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navbars;
