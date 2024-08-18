// src/pages/index.js
"use client";
import { useState } from 'react';

export default function Home() {
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = 'rickroll'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <p className="hidden">The answer is &quot;iamtheanswer&quot;</p>
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="password"
            placeholder="Enter your password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className="p-2 mb-4 text-lg"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      ) : (
        <div className="mt-10 md:mt-20">
          <h1 className="text-xl text-center text-gray-400">You just got rickrolled <span className="font-bold text-white">Inspector</span></h1>
          
          <video className="mt-4 md:mt-6" width="100%" controls autoPlay>
            <source src="/ricked.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
