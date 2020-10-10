import React from "react";
import { Card, Form, Button, ButtonGroup, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser } from "../redux/actions/users";

const SignupPage = (props) => {
  const router = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");
  const [error, setError] = React.useState("");

  async function submitSignup(e) {
    e.preventDefault();
    const success = () => {
      router.push("/login");
    };
    const fail = (e) => setError(e);
    if (name && email && password && rePassword && password === rePassword) {
      dispatch(addUser({ name, email, password }, success, fail));
    } else {
      setError("Please, enter valid fields!");
    }
  }

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={submitSignup}>
          <Form.Group controlId="fullname">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your fullname"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="repeatpass">
            <Form.Label>Repeat password</Form.Label>
            <Form.Control
              type="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Repeat your password"
            />
          </Form.Group>
          <ButtonGroup>
            <Button variant="success" type="submit">
              Signup
            </Button>
            <Button variant="warning" type="reset">
              Reset
            </Button>
          </ButtonGroup>
          {error ? (
            <Alert variant="danger" style={{ marginTop: 25 }}>
              Submit data of new user failed because of {error}
            </Alert>
          ) : null}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignupPage;
