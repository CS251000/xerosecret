// src/pages/index.js
"use client";
import { useState } from 'react';

export default function Home() {
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = '1234'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter your password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <button type="submit" style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h1>Welcome to the secret area!</h1>
          <p>This text is only visible after entering the correct password.</p>
        </div>
      )}
    </div>
  );
}
