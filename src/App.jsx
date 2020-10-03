import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./components/HomePage";
import BooksPage from "./components/BooksPage";
import StudentsPage from "./components/StudentsPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Container className="pt-5">
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/students">
              <StudentsPage />
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