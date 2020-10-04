import React from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function UpdateBookModal(props) {
  return (
    <Modal show={props.showUpdate} onHide={props.handleUpdateClose}>
      <Modal.Header closeButton className="bg-warning">
        <Modal.Title>Update book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={props.activeBook.title}
              onChange={(e) =>
                props.setActiveBook({
                  ...props.activeBook,
                  title: e.target.value,
                })
              }
              type="text"
              placeholder="Enter book title"
            />
            {props.submitted && !props.activeBook.title ? (
              <Form.Text className="text-danger">
                Plese enter a title for the book!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              value={props.activeBook.author}
              onChange={(e) =>
                props.setActiveBook({
                  ...props.activeBook,
                  author: e.target.value,
                })
              }
              type="text"
              placeholder="Enter author name"
            />
            {props.submitted && !props.activeBook.author ? (
              <Form.Text className="text-danger">
                Plese enter the fullname of the author!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="pages">
            <Form.Label>Pages number</Form.Label>
            <Form.Control
              value={props.activeBook.pages}
              onChange={(e) =>
                props.setActiveBook({
                  ...props.activeBook,
                  pages: e.target.value,
                })
              }
              type="number"
              placeholder="Enter number of pages"
            />
            {props.submitted && !props.activeBook.pages ? (
              <Form.Text className="text-danger">
                Plese enter number of pages!
              </Form.Text>
            ) : null}
          </Form.Group>
        </Form>
        {props.errorUpdate ? (
          <Alert variant="danger">
            Update data of book failed because of {props.errorUpdate}
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
