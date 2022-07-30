import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const footer = () => {
  return (
    <Card className="text-center">
    <Card.Header>Síguenos en todos lados</Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Facebook | Instagram | TikTok | YouTube
      </Card.Text>
      <Button variant="secondary"></Button>
    </Card.Body>
    <Card.Footer className="text-muted">Made by Miguel, Vanessa, Luis, Elizabeth et Rebecca</Card.Footer>
  </Card>
  )
}

export default footer
