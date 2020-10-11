import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { getOneStudent } from "../redux/actions/students";

export default function StudentPage() {
  const dispatch = useDispatch();
  const router = useHistory();
  // get the id from the visited route using `useParams()`of `react-router-dom`
  const { id } = useParams();
  // state to contain the data of the student
  const [student, setStudent] = React.useState(null);

  React.useEffect(() => {
    dispatch(getOneStudent(id, setStudent, () => router.push("/students")));
  }, [id, dispatch, router]);

  return student ? (
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <h1>Student: {student.name}</h1>
          </Card.Header>
          <Card.Body>
            <strong>Name: </strong> {student.name}
            <br />
            <strong>Phone: </strong> {student.phone}
            <br />
            <strong>Email: </strong> {student.email}
            <br />
            <strong>Age: </strong> {student.age}
            <br />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ) : (
    <></>
  );
}
