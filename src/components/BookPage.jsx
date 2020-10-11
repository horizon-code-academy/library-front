import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { getOneBook } from "../redux/actions/books";

export default function BookPage() {
  const dispatch = useDispatch();
  const router = useHistory();

  const token = useSelector((state) => state.auth.token);

  // get the id from the visited route using `useParams()`of `react-router-dom`
  const { id } = useParams();
  // state to contain the data of the book
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    if (!token) router.push("/login");
  });

  React.useEffect(() => {
    dispatch(getOneBook(id, setBook, () => router.push("/books")));
  }, [id, dispatch, router]);

  return book ? (
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <h1>Book: {book.title}</h1>
          </Card.Header>
          <Card.Body>
            <strong>Name: </strong> {book.title}
            <br />
            <strong>Author: </strong> {book.author}
            <br />
            <strong>Pages: </strong> {book.pages}
            <br />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ) : (
    <></>
  );
}
