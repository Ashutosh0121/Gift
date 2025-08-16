import { useEffect, useRef, useState } from "react";
import song from "./assets/song/Happy Birthday Ishq Forever 128 Kbps.mp3";

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current && audioRef.current.play();
    }
  }, [isPlaying]);

  const handleToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700">Welcome to Home!</h1>
      <audio ref={audioRef} src={song} autoPlay />
      <button
        onClick={handleToggle}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Push
      </button>
    </div>
  );
}
