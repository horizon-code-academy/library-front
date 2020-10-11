import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./components/HomePage";
import BooksPage from "./components/BooksPage";
import StudentsPage from "./components/StudentsPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import BookPage from "./components/BookPage";
import StudentPage from "./components/StudentPage";

function App() {
  return (
    <Router>
      <Header />
      <Container className="pt-5">
        <div>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/students/:id">
              <StudentPage />
            </Route>
            <Route path="/students">
              <StudentsPage />
            </Route>
            <Route path="/books/:id">
              <BookPage />
            </Route>
            <Route path="/books">
              <BooksPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
