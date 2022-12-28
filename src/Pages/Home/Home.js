/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import headerImg from '../../Assets/img/header-img.svg';
import './Home.css';
const Home = () => {
  return (
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
            <Button className="margin" variant="outline-light">
              Let's connect
            </Button>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <img className="img-width" src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
