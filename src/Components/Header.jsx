import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="warning">
        <Container>
          <Nav className="h3">Бекзат Осмоналиев</Nav>
          <Link to="/">
            <Navbar.Brand className="btn text-secondary linkFor">
              Об о мне
            </Navbar.Brand>
          </Link>
          <Link to="/hobby">
            <Navbar.Brand className="btn text-secondary linkFor">
              Хобби
            </Navbar.Brand>
          </Link>
          <Link to="/makers">
            <Navbar.Brand className="btn text-secondary linkFor">
              Как я попал в "Makers"
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

// <Link to="/">
// <Nav.Brand className="btn ">Об о мне</Nav.Brand>
// </Link>
// <Link to="/hobby">
// <Nav.Brand className="btn ">Хобби</Nav.Brand>
// </Link>
// <Link to="/makers">
// <Nav.Brand className="btn ">Как я попал в "Makers"</Nav.Brand>
// </Link>
