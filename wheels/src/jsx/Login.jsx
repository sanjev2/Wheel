import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verify email from local storage
    const storedUser = JSON.parse(localStorage.getItem('user')); // Assuming user data is stored in 'user' key
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // Add your login logic here, e.g., set user state, redirect, etc.
      console.log('Login successful!');
      // Navigate to the dashboard or landing page
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.'); // Set error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="back-button" onClick={() => navigate('/')}>
          ←
        </div>
        
        <div className="header">
          <h1 className="title">We Care Wheels</h1>
          <h2 className="subtitle">Welcome Back</h2>
          <p className="description">Please login to your account</p>
        </div>

        {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span 
              className="forgot-password"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot Password?
            </span>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <button type="button" className="emergency-button" onClick={() => navigate('/emergency')}>
            Emergency
          </button>

          <p className="signup-text">
            Don't have an account?{' '}
            <span 
              className="signup-link"
              onClick={() => navigate('/signup')}
            >
              Sign up here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
