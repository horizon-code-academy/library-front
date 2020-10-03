import React from "react";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  Table,
  ButtonGroup,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";

export default function StudentsPage(props) {
  const [students, setStudents] = React.useState(null);
  const [activeStudent, setActiveStudent] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [showDelete, setShowDelete] = React.useState(false);
  const [showUpdate, setShowUpdate] = React.useState(false);
  const [error, setError] = React.useState("");
  const [errorDelete, setDeleteError] = React.useState("");
  const [errorUpdate, setUpdateError] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    const getStudents = async () => {
      await axios
        .get("http://localhost:8081/students")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((e) => {
          setError(e.message);
        });
    };
    getStudents();
  }, []);

  const submitStudent = async (student) => {
    await axios
      .post("http://localhost:8081/students", student)
      .then(() => {
        setShow(false);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const updateStudent = async () => {
    await axios
      .put("http://localhost:8081/students/" + activeStudent._id, activeStudent)
      .then(() => {
        setShowUpdate(false);
      })
      .catch((e) => {
        setUpdateError(e.message);
      });
  };

  const handleClose = () => {
    setSubmitted(true);
    if (name && age && email && phone) {
      submitStudent({ name, age, email, phone });
    } else {
      setUpdateError("Missing fields!");
    }
  };
  const handleShow = () => setShow(true);

  const handleUpdateClose = () => {
    setSubmitted(true);
    if (activeStudent.name && activeStudent.age && activeStudent.phone) {
      updateStudent();
    }
  };
  const handleUpdateShow = () => setShowUpdate(true);

  const handleDeleteClose = async () => {
    await axios
      .delete("http://localhost:8081/students/" + activeStudent._id)
      .then(() => {
        setShowDelete(false);
      })
      .catch((e) => {
        setDeleteError(e.message);
      });
  };
  const handleDeleteShow = () => setShowDelete(true);

  return (
    <>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h1>Students</h1>
              <Button onClick={handleShow} variant="success">
                Add
              </Button>
            </Card.Header>
            <Card.Body>
              <Table striped hover bordered>
                <thead>
                  <tr>
                    <th>Fullname</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {students ? (
                    students.length > 0 ? (
                      students.map((student) => (
                        <tr key={student._id}>
                          <td>{student.name}</td>
                          <td>{student.age}</td>
                          <td>{student.phone}</td>
                          <td>{student.email}</td>
                          <td>
                            <ButtonGroup size="sm">
                              <Button
                                variant="danger"
                                onClick={() => {
                                  setActiveStudent(student);
                                  handleDeleteShow();
                                }}
                              >
                                Delete
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setActiveStudent(student);
                                  handleUpdateShow();
                                }}
                              >
                                Update
                              </Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="text-center" colSpan="4">
                          No students available.
                        </td>
                      </tr>
                    )
                  ) : (
                    <tr>
                      <td className="text-center" colSpan="4">
                        Loading...
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-success text-light">
          <Modal.Title>Add student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group controlId="name">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter student name"
              />
              {submitted && !name ? (
                <Form.Text className="text-danger">
                  Plese enter a fullname for the student!
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                onChange={(e) => setAge(e.target.value)}
                type="number"
                placeholder="Enter the age of student"
              />
              {submitted && !age ? (
                <Form.Text className="text-danger">
                  Plese enter the age of the student!
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Enter phone number"
              />
              {submitted && !phone ? (
                <Form.Text className="text-danger">
                  Please enter a phone number!
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email address"
              />
              {submitted && !email ? (
                <Form.Text className="text-danger">
                  Please enter an email address!
                </Form.Text>
              ) : null}
            </Form.Group>
          </Form>
          {error ? (
            <Alert variant="danger">
              Submit data of student failed because of {error}
            </Alert>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Validate
          </Button>
        </Modal.Footer>
      </Modal>
      {activeStudent && (
        <>
          <Modal show={showUpdate} onHide={handleUpdateClose}>
            <Modal.Header closeButton className="bg-warning">
              <Modal.Title>Update student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group controlId="name">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    value={activeStudent.name}
                    onChange={(e) =>
                      setActiveStudent({
                        ...activeStudent,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter student name"
                  />
                  {submitted && !activeStudent.name ? (
                    <Form.Text className="text-danger">
                      Plese enter a name for the student!
                    </Form.Text>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    value={activeStudent.age}
                    onChange={(e) =>
                      setActiveStudent({
                        ...activeStudent,
                        age: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter age name"
                  />
                  {submitted && !activeStudent.age ? (
                    <Form.Text className="text-danger">
                      Plese enter the fullname of the age!
                    </Form.Text>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    value={activeStudent.phone}
                    onChange={(e) =>
                      setActiveStudent({
                        ...activeStudent,
                        phone: e.target.value,
                      })
                    }
                    type="number"
                    placeholder="Enter number of phone"
                  />
                  {submitted && !activeStudent.phone ? (
                    <Form.Text className="text-danger">
                      Plese enter number of phone!
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Form>
              {errorUpdate ? (
                <Alert variant="danger">
                  Update data of student failed because of {errorUpdate}
                </Alert>
              ) : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleUpdateClose}>
                Close
              </Button>
              <Button variant="warning" onClick={handleUpdateClose}>
                Update
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showDelete} onHide={handleDeleteClose}>
            <Modal.Header closeButton className="bg-danger text-light">
              <Modal.Title>Delete student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Do you really want to delete "
              {activeStudent ? activeStudent.name : ""}
              "?
              {errorDelete ? (
                <Alert variant="danger">
                  Delete student failed because of {errorDelete}
                </Alert>
              ) : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleDeleteClose}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleDeleteClose}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}
