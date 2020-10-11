import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function HomePage() {
  const router = useHistory();

  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    if (!token) router.push("/login");
  });

  return (
    <Row>
      <Col md={12}>
        <h1>Library</h1>
      </Col>
      <Col md={6}>
        <Link to="/students">
          <Card bg="success">
            <Card.Img variant="top" src="/img/students.jpeg"></Card.Img>
            <Card.Body>
              <h1>Students</h1>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col md={6}>
        <Link to="/books">
          <Card bg="info">
            <Card.Img variant="top" src="/img/books.jpeg"></Card.Img>
            <Card.Body>
              <h1>Books</h1>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  );
}
