import React from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function UpdateStudentModal(props) {
  return (
    <Modal show={props.showUpdate} onHide={props.handleUpdateClose}>
      <Modal.Header closeButton className="bg-warning">
        <Modal.Title>Update student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="name">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              value={props.activeStudent.name}
              onChange={(e) =>
                props.setActiveStudent({
                  ...props.activeStudent,
                  name: e.target.value,
                })
              }
              type="text"
              placeholder="Enter student name"
            />
            {props.submitted && !props.activeStudent.name ? (
              <Form.Text className="text-danger">
                Please enter a fullname for the student!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              value={props.activeStudent.age}
              onChange={(e) =>
                props.setActiveStudent({
                  ...props.activeStudent,
                  age: e.target.value,
                })
              }
              type="number"
              placeholder="Enter age name"
            />
            {props.submitted && !props.activeStudent.age ? (
              <Form.Text className="text-danger">
                Plese enter the age of the student!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={props.activeStudent.email}
              onChange={(e) =>
                props.setActiveStudent({
                  ...props.activeStudent,
                  email: e.target.value,
                })
              }
              type="email"
              placeholder=" enter an email address"
            />
            {props.submitted && !props.activeStudent.email ? (
              <Form.Text className="text-danger">
                Please enter an email address!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              value={props.activeStudent.phone}
              onChange={(e) =>
                props.setActiveStudent({
                  ...props.activeStudent,
                  phone: e.target.value,
                })
              }
              type="tel"
              placeholder="Enter number of phone"
            />
            {props.submitted && !props.activeStudent.phone ? (
              <Form.Text className="text-danger">
                Plese enter number of phone!
              </Form.Text>
            ) : null}
          </Form.Group>
        </Form>
        {props.errorUpdate ? (
          <Alert variant="danger">
            Update data of student failed because of {props.errorUpdate}
          </Alert>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleUpdateClose}>
          Close
        </Button>
        <Button variant="warning" onClick={props.handleUpdateClose}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
