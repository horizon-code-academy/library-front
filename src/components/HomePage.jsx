import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <Row>
      <Col md={12}>
        <h1>Library</h1>
      </Col>
      <Col md={6}>
        <Link to="/students">
          <Card bg="success">
            <Card.Img variant="top" src="/img/students.jpeg"></Card.Img>
            <Card.Body>Students</Card.Body>
          </Card>
        </Link>
      </Col>
      <Col md={6}>
        <Link to="/books">
          <Card bg="info">
            <Card.Img variant="top" src="/img/books.jpeg"></Card.Img>
            <Card.Body>Books</Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  );
}
