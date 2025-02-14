import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";

const Dashboard = () => (
  <div style={{ textAlign: "center", marginTop: "50px", color: "#333" }}>
    <h2>Welcome to Dashboard</h2>
    <p>You have successfully logged in.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
