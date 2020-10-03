import React from "react";
import { Card, Form, Button, ButtonGroup } from "react-bootstrap";

const SignupPage = (props) => (
  <Card>
    <Card.Body>
      <Form>
        <Form.Group controlId="fullname">
          <Form.Label>Fullname</Form.Label>
          <Form.Control type="text" placeholder="Enter your fullname" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="repeatpass">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control type="password" placeholder="Repeat your password" />
        </Form.Group>
        <ButtonGroup>
          <Button variant="success" type="submit">
            Signup
          </Button>
          <Button variant="warning" type="reset">
            Reset
          </Button>
        </ButtonGroup>
      </Form>
    </Card.Body>
  </Card>
);

export default SignupPage;
