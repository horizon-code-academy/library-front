import React from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function AddStudentModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton className="bg-success text-light">
        <Modal.Title>Add student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="name">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              onChange={(e) => props.setPages(e.target.value)}
              type="text"
              placeholder="Enter student name"
            />
            {props.submitted && !props.name ? (
              <Form.Text className="text-danger">
                Plese enter a fullname for the student!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              onChange={(e) => props.setAge(e.target.value)}
              type="number"
              placeholder="Enter the age of student"
            />
            {props.submitted && !props.age ? (
              <Form.Text className="text-danger">
                Plese enter the age of the student!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              onChange={(e) => props.setPhone(e.target.value)}
              type="tel"
              placeholder="Enter phone number"
            />
            {props.submitted && !props.phone ? (
              <Form.Text className="text-danger">
                Please enter a phone number!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => props.setEmail(e.target.value)}
              type="email"
              placeholder="Enter email address"
            />
            {props.submitted && !props.email ? (
              <Form.Text className="text-danger">
                Please enter an email address!
              </Form.Text>
            ) : null}
          </Form.Group>
        </Form>
        {props.error ? (
          <Alert variant="danger">
            Submit data of student failed because of {props.error}
          </Alert>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={props.handleClose}>
          Validate
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
