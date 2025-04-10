'use client'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/home.module.css';

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      // If scrolling down and past a threshold, hide the navbar
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      
      className={`${styles.navbar} ${isHidden ? styles.hidden : ''} tw-bg-white`}
    >
      <Container>
        <Navbar.Brand href="/">jaiquez</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link href="/" className={styles.link}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Work" id="basic-nav-dropdown">
                <NavDropdown.Item href="/work/bookblog">Book Blog</NavDropdown.Item>
                <NavDropdown.Item href="/work/l4d">GameSite</NavDropdown.Item>
                <NavDropdown.Item href="/work/crocs">Crocs</NavDropdown.Item>
                <NavDropdown.Item href="/work/riddles">Riddles</NavDropdown.Item>
                <NavDropdown.Item href="/work/flippo">Flippo</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="/music">Fan Funnel</Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;