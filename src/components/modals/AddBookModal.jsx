import React from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function AddBookModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton className="bg-success text-light">
        <Modal.Title>Add book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => props.setTitle(e.target.value)}
              type="text"
              placeholder="Enter book title"
            />
            {props.submitted && !props.title ? (
              <Form.Text className="text-danger">
                Plese enter a title for the book!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              onChange={(e) => props.setAuthor(e.target.value)}
              type="text"
              placeholder="Enter author name"
            />
            {props.submitted && !props.author ? (
              <Form.Text className="text-danger">
                Plese enter the fullname of the author!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="pages">
            <Form.Label>Pages number</Form.Label>
            <Form.Control
              onChange={(e) => props.setPages(e.target.value)}
              type="number"
              placeholder="Enter number of pages"
            />
            {props.submitted && !props.pages ? (
              <Form.Text className="text-danger">
                Plese enter number of pages!
              </Form.Text>
            ) : null}
          </Form.Group>
        </Form>
        {props.error ? (
          <Alert variant="danger">
            Submit data of book failed because of {props.error}
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
