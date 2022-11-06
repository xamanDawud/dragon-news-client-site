import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/ContextProvider/ContextProvider";

const Register = () => {
  let { createUser, profileInfo } = useContext(AuthContext);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    let password = form.password.value;
    let name = form.name.value;
    let url = form.url.value;
    createUser(email, password)
      .then((result) => {
        let user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));

    console.log(email, password, name, url);
  };
  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>PhotoURL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your photo url"
            name="url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
