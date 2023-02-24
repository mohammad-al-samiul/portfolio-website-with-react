import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Assets/img/logo.svg';
import navIcon1 from '../../../Assets/img/nav-icon1.svg';
import navIcon2 from '../../../Assets/img/nav-icon2.svg';
import navIcon3 from '../../../Assets/img/nav-icon3.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center ">
          <Col className="p-5" size={12} sm={6}>
            <img className="image-logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
