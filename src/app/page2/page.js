// src/pages/index.js
"use client";
import { useState } from 'react';

export default function Page2() {
  const [inputPassword, setInputPassword] = useState('');

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <p className="hidden">The answer is &quot;iamtheanswer&quot;</p>
        <div className="mt-10 md:mt-20">
          <h1 className="text-xl text-center text-gray-400">You just got rickrolled <span className="font-bold text-white">Inspector</span></h1>
          
          <video className="mt-4 md:mt-6" width="100%" controls autoPlay>
            <source src="/ricked.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
}
