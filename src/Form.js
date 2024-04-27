import React, { useState } from 'react';
import './Form.css';
import Navbr from './components/header/Navbar.js';
import Foot from './components/footer/Foot.js';

function Form() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Form">
          <div className='mb-4'>{ <Navbr/> }</div>
      <h2 className='text-center'>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>{ <Foot/> }</div>
    </div>
  );
}

export default Form;

import React, { useState } from 'react';
import { Container, Form, Button, Col, Row, Alert } from 'react-bootstrap';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Enter a name";
    }
    if (!email.trim()) {
      errors.email = "Enter an email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Enter email address in correct format (like abc@gmail.com)";
    }
    if (!gender) {
      errors.gender = "Please select a gender";
    }
    if (password.length < 8) {
      errors.password = "Password length should be at least 8 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h2 className='text-center'>Form</h2>
            <Form.Group controlId="name">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender:</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  id="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                  isInvalid={!!errors.gender}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  id="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                  isInvalid={!!errors.gender}
                />
              </div>
              <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>&nbsp;
            <div className=' text-center justify-content-center'> <Button variant="primary" type="submit">
              Submit
            </Button></div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
