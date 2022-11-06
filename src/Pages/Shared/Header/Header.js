import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { AuthContext } from "../../../context/ContextProvider/ContextProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
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
              <Link to="/">
                <Button className="bttn" variant="outline-primary">
                  Home
                </Button>{" "}
              </Link>
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
                {user?.email ? (
                  <>
                    <p>{user.email}</p>
                    <button onClick={logOut}>Sign Out</button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      {" "}
                      <button>Login</button>
                    </Link>
                    <Link to="/register">
                      <button>Register</button>
                    </Link>
                  </>
                )}
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
