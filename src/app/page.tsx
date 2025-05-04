//@ts-nocheck
"use client";
import { FaHandPaper, FaGlassWhiskey, FaClock, FaBreadSlice, FaMoon, FaRegMoon, FaSocks } from 'react-icons/fa';
import { MdNoFood } from 'react-icons/md';
import Image from 'next/image';

const pics = {
  bye: '/images/bye.png',
  byemick: '/images/byemick.jpg',
  juice: '/images/juice.jpg',
  seesoon: '/images/seesoon.jpg',
  toast: '/images/toast.jpg',
  night: '/images/night.jpg',
  bedtime: '/images/bedtime.jpg',
  tea: '/images/tea.jpg',
  jelly: '/images/jelly.jpg',
  sleeptight: '/images/sleeptight.jpg',
  socks: '/images/socks.jpg',
};

// Define a mapping of words to their corresponding icons (can be empty now if you prefer images)
const wordIcons: { [key: string]: React.ComponentType } = {
  bye: FaHandPaper,
  byemick: FaHandPaper,
  juice: FaGlassWhiskey,
  seesoon: FaClock,
  toast: FaBreadSlice,
  night: FaMoon,
  bedtime: FaMoon,
  tea: MdNoFood,
  jelly: MdNoFood,
  sleeptight: FaRegMoon,
  socks: FaSocks,
};

export default function Home() {
  const words = ['bye', 'juice', 'seesoon', 'byemick', 'toast', 'night', 'bedtime', 'tea', 'jelly', 'sleeptight', 'socks'];

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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 overflow-auto">
      <div className="flex flex-col items-start gap-4">
        {words.map((word) => (
          <div key={word} className="flex flex-col items-center">
            <button
              type="button"
              key={word}
              className="bg-blue-500 hover:bg-blue-700 rounded w-40 h-34 flex items-center justify-center overflow-hidden shadow-md active:shadow-sm active:translate-y-0.5 transition-shadow duration-100"
              onClick={() => playWord(word)}
            >
              {pics[word] && (
                <div className="relative w-full h-full">
                  <Image src={pics[word]} alt={word} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
            </button>
            <p className="mt-2 text-sm text-gray-700">{word.charAt(0).toUpperCase() + word.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}