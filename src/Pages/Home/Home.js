/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import headerImg from '../../Assets/img/header-img.svg';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import './Home.css';
const Home = () => {
  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs={12} md={6} xl={6} className="banner-padding">
              <h1 className="tagline">Welcome to My Portfolio</h1>
              <h2 className="margin">
                {`Hi, This is Mohammad Al Samiul`} <br />
                <span className="h4">Front-End Developer</span>{' '}
              </h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eligendi recusandae,
                natus ullam aliquam temporibus! Repellendus, fuga explicabo ullam necessitatibus.
              </p>
              <a
                target="_bl
              "
                className="link-design"
                href="https://drive.google.com/file/d/160cEyaRDd6Oqf_3TFeOZaBrQ1aFWgEa5/view?usp=share_link">
                <Button className="margin" variant="outline-light">
                  Download Resume
                </Button>
              </a>
            </Col>
            <Col xs={12} md={6} xl={4}>
              <img className="img-width" src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <Skills />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
