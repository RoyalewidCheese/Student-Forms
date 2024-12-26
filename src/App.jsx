import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      errors.mobile = "Valid 10-digit mobile number is required";
    if (
      !formData.email ||
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)
    )
      errors.email = "Valid email is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.dob) errors.dob = "Date of birth is required";
    if (!formData.course) errors.course = "Course selection is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
    setErrors({});
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center">Higher Secondary Admission</h2>
          {showAlert && (
            <Alert variant="success" className="mt-3">
              Data Stored Successfully! <br />
              {JSON.stringify(formData, null, 2)}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                isInvalid={!!errors.mobile}
              />
              <Form.Control.Feedback type="invalid">
                {errors.mobile}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                isInvalid={!!errors.gender}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                isInvalid={!!errors.dob}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dob}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Select
                name="course"
                value={formData.course}
                onChange={handleChange}
                isInvalid={!!errors.course}
              >
                <option value="">Select</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.course}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button type="submit" variant="primary">
                Register
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
