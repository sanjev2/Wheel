import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/forgotpassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setError("Please enter a valid email.");
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Store email and new password in local storage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", newPassword);

    alert("Password reset successful! Please log in with your new password.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h1 className="title">We Care Wheels</h1>
        <h2 className="subtitle">Reset Password</h2>
        <p className="description">Enter your email and new password.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="submit-button">
            Reset Password
          </button>

          <p className="back-to-login">
            <span onClick={() => navigate("/login")} className="back-link">
              Back to Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
