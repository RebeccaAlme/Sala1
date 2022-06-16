import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const footer = () => {
  return (
    <Card className="text-center">
    <Card.Header>Síguenos</Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Facebook | Instagram | TikTok | YouTube
      </Card.Text>
      <Button variant="primary">Recibe nuestras promociones</Button>
    </Card.Body>
    <Card.Footer className="text-muted">Made with love by RebeccaAlMe</Card.Footer>
  </Card>
  )
}

export default footer
