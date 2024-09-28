// src/pages/index.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [inputPassword, setInputPassword] = useState('');
  const router = useRouter();

  const correctPassword = 'rickroll'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      router.push('/page2');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
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
    </div>
  );
}
