import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Toast,
  FloatingLabel,
} from "react-bootstrap";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [female, setFemale] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="App w-100 p-5 ">
        <Form className="bg-dark text-white shadow-lg p-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>lastname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Check
              inline
              label="Male"
              name="male"
              type={"radio"}
              id="Gender"
              onClick={() => setGender("Male")}
            />
            <Form.Check
              inline
              label="Female"
              name="Gender"
              type={"radio"}
              id="Gender"
              onClick={() => setGender("Female")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Bio"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a bio here"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit" onClick={submit}>
            Submit
          </Button>
        </Form>
      </div>
      {submitted && (
        <>
          <Card
            style={{ width: "20rem" }}
            className="bg-dark text-white shadow-lg "
          >
            <Card.Body>
              <Card.Text>Firstname: {firstName}</Card.Text>{" "}
              <Card.Text>lastName: {lastName}</Card.Text>
              <Card.Text>Email: {email}</Card.Text>
              <Card.Text>Gender: {gender}</Card.Text>
              <Card.Text>Address: {address}</Card.Text>
              <Card.Text>Bio: {bio}</Card.Text>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

export default App;
