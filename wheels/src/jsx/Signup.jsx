import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required.";
    }

    if (!/^\d{7,15}$/.test(formData.number)) {
      newErrors.number = "Phone number must contain only numbers (7-15 digits).";
    }

    if (formData.password.length < 8 || !/\d/.test(formData.password) || !/[a-zA-Z]/.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long with at least one number and one letter.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Save data to localStorage
      localStorage.setItem("userData", JSON.stringify(formData));

      setShowModal(true);

      // Show success alert message
      window.alert("Signup successful! Redirecting to Login...");

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div className="container">
      <h1>WHEELS</h1>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} noValidate>
        {[
          { label: "Full Name", id: "name", type: "text" },
          { label: "Email Address", id: "email", type: "email" },
          { label: "Location", id: "location", type: "text" },
          { label: "Phone Number", id: "number", type: "tel" },
          { label: "Password", id: "password", type: "password" },
          { label: "Confirm Password", id: "confirmPassword", type: "password" },
        ].map(({ label, id, type }) => (
          <div className="input-group" key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              name={id}
              value={formData[id]}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            {errors[id] && <small className="error-message">{errors[id]}</small>}
          </div>
        ))}

        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Success!</h2>
            <p>Your sign-up process is complete. Redirecting to Login...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
