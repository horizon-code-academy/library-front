import React from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/actions/users";

const LoginPage = () => {
  const router = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  async function submitLogin(e) {
    e.preventDefault();
    const success = () => {
      router.push("/");
    };
    const fail = (e) => setError(e);
    if (email && password) {
      dispatch(login({ email, password }, success, fail));
    } else {
      setError("Please, enter valid fields!");
    }
  }

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={submitLogin}>
          <Form.Group controlId="formBasicEmail">
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

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {error ? (
            <Alert variant="danger" style={{ marginTop: 25 }}>
              User login failed because of {error}
            </Alert>
          ) : null}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginPage;
