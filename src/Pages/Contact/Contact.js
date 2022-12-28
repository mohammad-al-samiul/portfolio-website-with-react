import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import contactImg from '../../Assets/img/contact-img.svg';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('xgebwblj');
  console.log(state);
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <div>
      <section className="contact" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img className="" src={contactImg} alt="Contact Us" />
            </Col>
            <Col size={12} md={6}>
              <div className="p-4">
                <h2 className="get-in-touch">Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-2">
                      <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                      <ValidationError
                        prefix="First Name"
                        field="firstName"
                        errors={state.errors}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-2">
                      <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                      <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                    </Col>
                    <Col size={12} sm={6} className="px-2">
                      <input type="email" id="email" name="email" placeholder="Email Address" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </Col>
                    <Col size={12} sm={6} className="px-2">
                      <input type="tel" id="tel" name="tel" placeholder="Phone No." />
                      <ValidationError prefix="Phone No." field="tel" errors={state.errors} />
                    </Col>
                    <Col size={12} className="px-2">
                      <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Message"></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                      <Button
                        type="submit"
                        disabled={state.submitting}
                        className="button"
                        variant="outline-light">
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
