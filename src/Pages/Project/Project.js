/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Project.css';

const Project = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">Project</h1>
      </div>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Project;
