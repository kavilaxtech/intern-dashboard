// src/Leaderboard.js
import React, { useEffect, useState } from 'react';
import './App.css';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://intern-dashboard-7bpz.onrender.com/api/data')
      .then(res => res.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="container">
      <h2>🏆 Leaderboard</h2>
      <table style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th style={{ textAlign: 'right' }}>Amount Raised (₹)</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((person, idx) => (
            <tr key={idx}>
              <td>{person.name}</td>
              <td style={{ textAlign: 'right' }}>{person.amountRaised}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
