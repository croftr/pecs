"use client";
import React from 'react';

export default function Home() {
  const words = ['bye', 'juice', 'seesoon', 'toast', 'night'];

  const playWord = (word: string) => {
    try {
      const audio = new Audio(`/audio/${word}.mp3`); // Assuming audio files are in the public/audio folder
      audio.play();
    } catch (error) {
      console.error("Could not play audio:", error);
      alert(`Audio file for "${word}" not found or could not be played.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl text-black mb-4">Lets be Chatty</h1>
      <div className="flex space-x-4">
        {words.map((word) => (
          <button
            type="button"
            key={word}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => playWord(word)}
          >
            {word.charAt(0).toUpperCase() + word.slice(1)}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">Click a button to hear the word.</p>
    </div>
  );
}