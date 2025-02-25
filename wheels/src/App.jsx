import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './jsx/Landing';
import Login from "./jsx/Login";
import Signup from "./jsx/Signup";
import ForgotPassword from "./jsx/ForgotPassword";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
