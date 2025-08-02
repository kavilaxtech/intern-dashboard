// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import './App.css';

function Dashboard({ userName }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://intern-dashboard-7bpz.onrender.com/api/data')

      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <p className="container">Loading...</p>;

  return (
    <div className="container">
      <h1>Welcome, {userName || data.name}!</h1>
      <p><strong>Referral Code:</strong> {data.referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ₹{data.amountRaised}</p>
      <h3>Rewards Unlocked:</h3>
      <ul>
        {data.rewards.map((reward, idx) => (
          <li key={idx}>{reward}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
