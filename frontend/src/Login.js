import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUserName }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (name.trim() !== '') {
      setUserName(name);
      navigate('/dashboard');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0e5eeff',
      boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: '#f7f7fcff',
        padding: '5rem 6rem',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
        width: '480px',
        boxSizing: 'border-box'
      }}>
        <h2 style={{
          marginBottom: '2rem',
          color: '#0a2a4d',
          textAlign: 'center',
          fontSize: '2rem'
        }}>
          Login / Signup
        </h2>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="name" style={{
            fontWeight: '600',
            display: 'block',
            marginBottom: '0.6rem',
            fontSize: '1.1rem',
            color: '#333'
          }}>
            Username:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #bbb',
              fontSize: '1.05rem',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '1.8rem' }}>
          <label htmlFor="password" style={{
            fontWeight: '600',
            display: 'block',
            marginBottom: '0.6rem',
            fontSize: '1.1rem',
            color: '#333'
          }}>
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #bbb',
              fontSize: '1.05rem',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          onClick={handleContinue}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#0a2a4d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.05rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            boxSizing: 'border-box'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#123a5f'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0a2a4d'}
        >
          Signup / Login
        </button>
      </div>
    </div>
  );
}

export default Login;
