// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());

// API route to return dummy data
app.get('/api/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, jsonData) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      res.json(JSON.parse(jsonData));
    }
  });
});
// New route for leaderboard data
app.get('/api/leaderboard', (req, res) => {
  const leaderboardData = [
    { name: "Kavitha Vaishali", amountRaised: 15000 },
    { name: "Ankit Raj", amountRaised: 12000 },
    { name: "Sneha S", amountRaised: 10000 }
  ];
  res.json(leaderboardData);
});



// Root route for browser test
app.get('/', (req, res) => {
  res.send('🎉 Intern Dashboard Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
