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
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
              type="text"
              placeholder="Enter student name"
            />
            {props.submitted && !props.name ? (
              <Form.Text className="text-danger">
                Plese enter a name for the student!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              type="text"
              placeholder="Enter age name"
            />
            {props.submitted && !props.age ? (
              <Form.Text className="text-danger">
                Plese enter the fullname of the age!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              value={props.age}
              onChange={(e) => props.setAge(e.target.value)}
              type="number"
              placeholder="Enter age name"
            />
            {props.submitted && !props.age ? (
              <Form.Text className="text-danger">
                Plese enter the fullname of the age!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              value={props.phone}
              onChange={(e) => props.setPhone(e.target.value)}
              type="number"
              placeholder="Enter number of phone"
            />
            {props.submitted && !props.phone ? (
              <Form.Text className="text-danger">
                Plese enter number of phone!
              </Form.Text>
            ) : null}
          </Form.Group>
        </Form>
        {props.errorAdd ? (
          <Alert variant="danger">
            Add data of student failed because of {props.errorAdd}
          </Alert>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleAddClose}>
          Close
        </Button>
        <Button variant="success" onClick={props.handleAddClose}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
