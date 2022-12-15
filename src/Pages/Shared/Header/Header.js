/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon1 from '../../../Assets/img/nav-icon1.svg';
import icon2 from '../../../Assets/img/nav-icon2.svg';
import icon3 from '../../../Assets/img/nav-icon3.svg';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#" className="fontSize">
            𝕸𝖔𝖍𝖆𝖒𝖒𝖆𝖉 𝕬𝖑 𝕾𝖆𝖒𝖎𝖚𝖑
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-lg-flex justify-content-center m-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact Me</Nav.Link>
            </Nav>
            <Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/mohammad-al-samiul/"
                    target="_blank"
                    className="spacing"
                    rel="noreferrer">
                    <img src={icon1} alt="" />
                  </a>
                  <a
                    href="https://www.facebook.com/alsamiul123/"
                    target="_blank"
                    className="spacing"
                    rel="noreferrer">
                    <img src={icon2} alt="" />
                  </a>
                  <a
                    href="https://github.com/NoobCoder-404"
                    target="_blank"
                    className="spacing "
                    rel="noreferrer">
                    <img src={icon3} alt="" />
                  </a>
                </div>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
