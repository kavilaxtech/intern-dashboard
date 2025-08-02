// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">InternDash</Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/dashboard" className="nav-item">Dashboard</Link>
        <Link to="/leaderboard" className="nav-item">Leaderboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
