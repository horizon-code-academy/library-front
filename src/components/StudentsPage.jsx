import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Table, ButtonGroup, Button } from "react-bootstrap";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "../redux/actions/students";
import AddStudentModal from "./modals/AddStudentModal";
import UpdateStudentModal from "./modals/UpdateStudentModal";
import DeleteStudentModal from "./modals/DeleteStudentModal";
import { Link, useHistory } from "react-router-dom";

export default function StudentsPage(props) {
  const dispatch = useDispatch();
  const router = useHistory();

  const token = useSelector((state) => state.auth.token);
  const students = useSelector((state) => state.students);

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
    if (!token) router.push("/login");
  });

  React.useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  async function submitAddStudent(book) {
    const success = () => {
      setShow(false);
      dispatch(getAllStudents());
    };
    const fail = (e) => setError(e.message);
    dispatch(addStudent(book, success, fail));
  }

  async function submitUpdateStudent() {
    const success = () => {
      setShowUpdate(false);
      dispatch(getAllStudents());
    };
    const fail = (e) => setUpdateError(e.message);
    dispatch(updateStudent(activeStudent, success, fail));
  }

  async function submitDeleteStudent() {
    const success = () => {
      setShowDelete(false);
      dispatch(getAllStudents());
    };
    const fail = (e) => setDeleteError(e.message);
    dispatch(deleteStudent(activeStudent._id, success, fail));
  }

  const handleClose = () => {
    setSubmitted(true);
    if (name && age && phone && email) {
      submitAddStudent({ name, age, phone, email });
    }
  };
  const handleShow = () => setShow(true);

  const handleUpdateClose = () => {
    setSubmitted(true);
    if (
      activeStudent.name &&
      activeStudent.age &&
      activeStudent.phone &&
      activeStudent.email
    ) {
      submitUpdateStudent();
    }
  };
  const handleUpdateShow = () => setShowUpdate(true);

  const handleDeleteClose = () => {
    submitDeleteStudent();
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
                          <td>
                            <Link to={`/students/${student._id}`}>
                              {student.name}
                            </Link>
                          </td>

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
                        <td className="text-center" colSpan="5">
                          No students available.
                        </td>
                      </tr>
                    )
                  ) : (
                    <tr>
                      <td className="text-center" colSpan="5">
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
      <AddStudentModal
        handleAddClose={handleClose}
        show={show}
        setShow={setShow}
        errorAdd={error}
        setError={setError}
        setName={setName}
        setAge={setAge}
        setEmail={setEmail}
        setPhone={setPhone}
      />
      {activeStudent && (
        <>
          <UpdateStudentModal
            handleUpdateClose={handleUpdateClose}
            showUpdate={showUpdate}
            errorUpdate={errorUpdate}
            setUpdateError={setUpdateError}
            activeStudent={activeStudent}
            setActiveStudent={setActiveStudent}
            submitted={submitted}
          />
          <DeleteStudentModal
            handleDeleteClose={handleDeleteClose}
            showDelete={showDelete}
            errorDelete={errorDelete}
            activeStudent={activeStudent}
            setActiveStudent={setActiveStudent}
          />
        </>
      )}
    </>
  );
}
