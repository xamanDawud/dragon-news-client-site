import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="mbb">
      <Navbar
        className=" d-lg-block"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <h2>Dragon News</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button className="bttn" variant="outline-primary">
                Home
              </Button>{" "}
              <Button className="bttn" variant="outline-primary">
                News
              </Button>{" "}
              <Button className="bttn" variant="outline-primary">
                Category
              </Button>{" "}
              <Button className="bttn" variant="outline-primary">
                All News
              </Button>{" "}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            <div className="d-lg-none d-block">
              <LeftSideNav />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
