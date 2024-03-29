import React from "react";
import { Button, Modal, Alert } from "react-bootstrap";

export default function DeleteBookModal(props) {
  return (
    <Modal show={props.showDelete} onHide={props.handleDeleteClose}>
      <Modal.Header closeButton className="bg-danger text-light">
        <Modal.Title>Delete book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you really want to delete "
        {props.activeBook ? props.activeBook.title : ""}
        "?
        {props.errorDelete ? (
          <Alert variant="danger">
            Delete book failed because of {props.errorDelete}
          </Alert>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleDeleteClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={props.handleDeleteClose}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
