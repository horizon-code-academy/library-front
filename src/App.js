import React from "react";
import { Container } from "react-bootstrap";
import BooksPage from "./components/BooksPage";
import StudentsPage from "./components/StudentsPage";

function App() {
  return (
    <Container className="pt-5">
      <StudentsPage />
    </Container>
  );
}

export default App;
