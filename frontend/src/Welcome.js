import React from 'react';

function Welcome() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e6ecf5, #cdd5ea)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        padding: '4rem 5rem',
        maxWidth: '900px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          marginBottom: '1.5rem',
          color: '#0a2a4d'
        }}>
          Welcome to InternDash 
        </h1>

        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.7',
          color: '#333',
          marginBottom: '2rem'
        }}>
          This portal helps interns track referrals, rewards, and raise donations during their journey. Login to access your personalized dashboard and see how you're performing against others on the leaderboard.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{
            backgroundColor: '#dde5f4ff',
            padding: '2rem',
            borderRadius: '16px',
            flex: '1 1 250px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{ color: '#0a2a4d', marginBottom: '1rem' }}> Easy Login</h3>
            <p>Start by logging in with your name. No password required, just a dummy login.</p>
          </div>

          <div style={{
            backgroundColor: '#dde5f4ff',
            padding: '2rem',
            borderRadius: '16px',
            flex: '1 1 250px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{ color: '#0a2a4d', marginBottom: '1rem' }}> Track Rewards</h3>
            <p>Monitor how many donations you’ve raised and see your unlocked rewards!</p>
          </div>

          <div style={{
            backgroundColor: '#dde5f4ff',
            padding: '2rem',
            borderRadius: '16px',
            flex: '1 1 250px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{ color: '#0a2a4d', marginBottom: '1rem' }}> Leaderboard</h3>
            <p>Check where you stand compared to other interns on the donation leaderboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
