import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import contactImg from '../../Assets/img/contact-img.svg';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img className="" src={contactImg} alt="Contact Us" />
            </Col>
            <Col size={12} md={6}>
              <div className="p-4">
                <h2 className="get-in-touch">Get In Touch</h2>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-2">
                      <input type="text" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-2">
                      <input type="text" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-2">
                      <input type="email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-2">
                      <input type="tel" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-2">
                      <textarea rows="4" placeholder="Message"></textarea>
                      <Button className="button" variant="outline-light">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
