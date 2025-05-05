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
  daddy: '/images/daddy.jpg',
  mummy: '/images/mummy.jpg',
  castle1: '/images/castle1.jpg',
  castle2: '/images/castle2.jpg',
  swimming: '/images/swimming.jpeg',
  guitar: '/images/guitar.jpg',
  trampoline: '/images/trampoline.jpg',
  applepud: '/images/applepud.jpg',
  car1: '/images/car1.jpg',
  car2: '/images/car2.jpg',
  park: '/images/park.jpg',
};

// Define a mapping of words to their corresponding icons (can be empty now if you prefer images)
const wordIcons: { [key: string]: React.ComponentType } = {
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
  const words = ['juice', 'seesoon', 'byemick', 'toast', 'night', 'bedtime', 'tea', 'jelly', 'sleeptight', 'socks', 'park', 'daddy', 'mummy', 'castle1', 'castle2', 'swimming', 'guitar', 'trampoline', 'applepud', 'car1', 'car2'];

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
    <div className="overflow-auto p-4 pt-20 pb-20">
      <div className="flex flex-wrap justify-center gap-4">
        {words.map((word) => (
          <div key={word} className="flex flex-col items-center">
            <button
              type="button"
              key={word}
              className="rounded w-60 h-50 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl active:shadow-md active:translate-y-0.5 transition-shadow duration-150 bg-white"
              onClick={() => playWord(word)}
            >
              {pics[word] && (
                <div className="relative w-full h-full">
                  <Image src={pics[word]} alt={word} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
            </button>
            {/* <p className="mt-2 text-sm text-gray-100">{word.charAt(0).toUpperCase() + word.slice(1)}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}