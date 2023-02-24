/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import project1 from '../../Assets/img/project1.png';
import project2 from '../../Assets/img/project2.png';
import project3 from '../../Assets/img/project3.png';
import './Project.css';

const Project = () => {
  return (
    <div className="no-padding ">
      <div className="text-center pb-5">
        <h1>Project</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem
          Ipsum has been the industry's standard dummy text.
        </p>
      </div>
      <div className="project-align">
        <div>
          <Card className="card-height" style={{ width: '22rem' }}>
            <Card.Img variant="top" src={project1} />
            <Card.Body className="card-design">
              <Card.Title>Real Estate Website</Card.Title>
              <Card.Text>
                {/* This real estate agent theme comes with modern homepage demos that you can import
                all in one click. I am attentively built from homepages to shop pages, product
                detail pages or other inner pages. */}
              </Card.Text>
              <div className="project-link-item">
                <div>
                  <a
                    target="_bl
              "
                    className="link-design"
                    href="https://github.com/mohammad-al-samiul/real-estate-app">
                    <Button className="margin" variant="outline-light">
                      Github Link
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    target="_bl
              "
                    className="link-design"
                    href="https://real-estate-website234.netlify.app/">
                    <Button className="margin" variant="outline-light">
                      Live Link
                    </Button>
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="card-height">
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={project2} />
            <Card.Body className="card-design">
              <Card.Title>Doctors Portal Website</Card.Title>
              <Card.Text>
                {/* This real estate agent theme comes with modern homepage demos that you can import
                all in one click. I am attentively built from homepages to shop pages, product
                detail pages or other inner pages. */}
              </Card.Text>
              <div className="project-link-item">
                <div>
                  <a
                    target="_bl
              "
                    className="link-design"
                    href="https://github.com/mohammad-al-samiul/doctor-portal-client.git">
                    <Button className="margin" variant="outline-light">
                      Github Link
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    target="_bl
              "
                    className="link-design"
                    href="https://doctors-portal-f0efe.web.app/">
                    <Button className="margin" variant="outline-light">
                      Live Link
                    </Button>
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card-height" style={{ width: '22rem' }}>
            <Card.Img variant="top" src={project3} />
            <Card.Body className="card-design">
              <Card.Title>Genius Car Website</Card.Title>
              <Card.Text>
                {/* This real estate agent theme comes with modern homepage demos that you can import
                all in one click. I am attentively built from homepages to shop pages, product
                detail pages or other inner pages. */}
              </Card.Text>
              <div className="project-link-item">
                <div>
                  <a
                    target="_bl
              "
                    className="link-design"
                    href="https://github.com/mohammad-al-samiul/car-doctor-client">
                    <Button className="margin" variant="outline-light">
                      Github Link
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    target="_bl
              "
                    className="link-design"
                    href="https://genius-car-394ea.web.app/">
                    <Button className="margin" variant="outline-light">
                      Live Link
                    </Button>
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Project;
