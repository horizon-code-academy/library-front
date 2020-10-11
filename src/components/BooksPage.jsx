import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Table, ButtonGroup, Button } from "react-bootstrap";
import {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../redux/actions/books";
import AddBookModal from "./modals/AddBookModal";
import UpdateBookModal from "./modals/UpdateBookModal";
import DeleteBookModal from "./modals/DeleteBookModal";
import { Link, useHistory } from "react-router-dom";

export default function BooksPage(props) {
  const dispatch = useDispatch();
  const router = useHistory();

  const token = useSelector((state) => state.auth.token);
  const books = useSelector((state) => state.books);

  const [activeBook, setActiveBook] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [showDelete, setShowDelete] = React.useState(false);
  const [showUpdate, setShowUpdate] = React.useState(false);
  const [error, setError] = React.useState("");
  const [errorDelete, setDeleteError] = React.useState("");
  const [errorUpdate, setUpdateError] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [pages, setPages] = React.useState("");

  React.useEffect(() => {
    if (!token) router.push("/login");
  });

  React.useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  async function submitAddBook(book) {
    const success = () => {
      setShow(false);
      dispatch(getAllBooks());
    };
    const fail = (e) => setError(e.message);
    dispatch(addBook(book, success, fail));
  }

  async function submitUpdateBook() {
    const success = () => {
      setShowUpdate(false);
      dispatch(getAllBooks());
    };
    const fail = (e) => setUpdateError(e.message);
    dispatch(updateBook(activeBook, success, fail));
  }

  async function submitDeleteBook() {
    const success = () => {
      setShowDelete(false);
      dispatch(getAllBooks());
    };
    const fail = (e) => setDeleteError(e.message);
    dispatch(deleteBook(activeBook._id, success, fail));
  }

  const handleClose = () => {
    setSubmitted(true);
    if (title && author && pages) {
      submitAddBook({ title, author, pages });
    }
  };
  const handleShow = () => setShow(true);

  const handleUpdateClose = () => {
    setSubmitted(true);
    if (activeBook.title && activeBook.author && activeBook.pages) {
      submitUpdateBook();
    }
  };
  const handleUpdateShow = () => setShowUpdate(true);

  const handleDeleteClose = () => {
    submitDeleteBook();
  };
  const handleDeleteShow = () => setShowDelete(true);

  return (
    <>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h1>Books</h1>
              <Button onClick={handleShow} variant="success">
                Add
              </Button>
            </Card.Header>
            <Card.Body>
              <Table striped hover bordered>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {books ? (
                    books.length > 0 ? (
                      books.map((book) => (
                        <tr key={book._id}>
                          <td>
                            <Link to={`/books/${book._id}`}>{book.title}</Link>
                          </td>
                          <td>{book.author}</td>
                          <td>{book.pages}</td>
                          <td>
                            <ButtonGroup size="sm">
                              <Button
                                variant="danger"
                                onClick={() => {
                                  setActiveBook(book);
                                  handleDeleteShow();
                                }}
                              >
                                Delete
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setActiveBook(book);
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
                          No books available.
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
      <AddBookModal
        handleClose={handleClose}
        show={show}
        setShow={setShow}
        error={error}
        setError={setError}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setPages={setPages}
      />
      {activeBook && (
        <>
          <UpdateBookModal
            handleUpdateClose={handleUpdateClose}
            showUpdate={showUpdate}
            errorUpdate={errorUpdate}
            setUpdateError={setUpdateError}
            activeBook={activeBook}
            setActiveBook={setActiveBook}
            submitted={submitted}
          />
          <DeleteBookModal
            handleDeleteClose={handleDeleteClose}
            showDelete={showDelete}
            errorDelete={errorDelete}
            activeBook={activeBook}
            setActiveBook={setActiveBook}
          />
        </>
      )}
    </>
  );
}
