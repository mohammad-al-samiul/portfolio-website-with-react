import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon1 from '../../../Assets/img/nav-icon1.svg';
import icon2 from '../../../Assets/img/nav-icon2.svg';
import icon3 from '../../../Assets/img/nav-icon3.svg';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-auto">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={(open ? 'open ' : '', scrolled ? 'scrolled' : '')}>
        <Container className="margins">
          <Navbar.Brand href="#" className="fontSize">
            𝕸𝖔𝖍𝖆𝖒𝖒𝖆𝖉 𝕬𝖑 𝕾𝖆𝖒𝖎𝖚𝖑
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleToggleClick}
            className="toggleBar"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-lg-flex justify-content-center m-auto padding">
              <Nav.Link href="#home" onClick={handleToggleClick}>
                Home
              </Nav.Link>
              <Nav.Link href="#skills" onClick={handleToggleClick}>
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" onClick={handleToggleClick}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" onClick={handleToggleClick}>
                Contact Me
              </Nav.Link>
            </Nav>
            <Nav>
              <span>
                <div className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/mohammad-al-samiul/"
                    target="_blank"
                    rel="noreferrer">
                    <img src={icon1} alt="" />
                  </a>
                  <a href="https://www.facebook.com/alsamiul123/" target="_blank" rel="noreferrer">
                    <img src={icon2} alt="" />
                  </a>
                  <a href="https://github.com/NoobCoder-404" target="_blank" rel="noreferrer">
                    <img src={icon3} alt="" />
                  </a>
                </div>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
