"use client";

import { FaHandPaper, FaGlassWhiskey, FaClock, FaBreadSlice, FaMoon } from 'react-icons/fa';

// Define a mapping of words to their corresponding icons
const wordIcons: { [key: string]: React.ComponentType } = {
  bye: FaHandPaper,
  juice: FaGlassWhiskey,
  seesoon: FaClock,
  toast: FaBreadSlice,
  night: FaMoon,
};

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
        {words.map((word) => {
          const Icon = wordIcons[word];
          return (
            <button
              type="button"
              key={word}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2"
              onClick={() => playWord(word)}
            >
              {Icon && <Icon size={24} />}
              <span className="text-sm opacity-75">{word.charAt(0).toUpperCase() + word.slice(1)}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-gray-500">Click a button to hear the word.</p>
    </div>
  );
}