import React from 'react';
import placeholder1 from './assets/placeholder1.png';
import placeholder2 from './assets/placeholder2.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center p-6 text-white">
      <header className="max-w-4xl w-full text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-2">BGvanisher v2</h1>
        <p className="text-lg text-gray-300 mb-1">Where background disappears</p>
        <p className="text-gray-400">Fast, free, no sign up, no ads — remove image backgrounds instantly.</p>
      </header>

      <main className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="flex flex-col items-center">
          <img
            src={placeholder1}
            alt="BGvanisher screenshot 1"
            className="rounded-lg shadow-lg mb-4 max-w-full h-auto"
          />
          <p className="text-center text-gray-400">Background removal in seconds</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={placeholder2}
            alt="BGvanisher screenshot 2"
            className="rounded-lg shadow-lg mb-4 max-w-full h-auto"
          />
          <p className="text-center text-gray-400">Download high quality PNGs without ads</p>
        </div>
      </main>

      <footer className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <a
          href="https://bgvanisher.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Go to Dashboard
        </a>
        <a
          href="https://x.com/alightcodess?t=wwhzn7hLK0pZXpPdBY2DxA&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition mt-4 md:mt-0"
        >
          Follow on X (Twitter)
        </a>
      </footer>
    </div>
  );
}

