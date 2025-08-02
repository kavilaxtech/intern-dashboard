// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Navbar from './Navbar';
import Welcome from './Welcome'; // optional welcome page

function App() {
  const [userName, setUserName] = useState('');

  return (
    <Router>
      <Navbar /> {/* <-- Navbar here */}

      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Optional */}
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        <Route path="/dashboard" element={<Dashboard userName={userName} />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
