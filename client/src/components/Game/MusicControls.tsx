import { useEffect, useState } from "react";
import { useMusic } from "../../lib/stores/useMusic";

export default function MusicControls() {
  const { isPlaying, volume, initializeMusic, toggleMusic, setVolume, playMusic } = useMusic();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showAutoplayMessage, setShowAutoplayMessage] = useState(false);

  useEffect(() => {
    initializeMusic();
    
    // Show message if music fails to autoplay
    const timer = setTimeout(() => {
      const { isPlaying } = useMusic.getState();
      if (!isPlaying) {
        setShowAutoplayMessage(true);
        setTimeout(() => setShowAutoplayMessage(false), 5000);
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [initializeMusic]);

  const handleToggle = () => {
    toggleMusic();
    setShowAutoplayMessage(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Autoplay message */}
      {showAutoplayMessage && !isPlaying && (
        <div className="bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-fade-in">
          Click the music button to start 🎵
        </div>
      )}
      
      <div className="flex items-center gap-2">
        {/* Volume Slider */}
        {showVolumeSlider && (
          <div className="bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-600 flex items-center gap-2">
            <span className="text-xs text-gray-400">Volume</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
            <span className="text-xs text-gray-300 min-w-[2rem]">
              {Math.round(volume * 100)}%
            </span>
          </div>
        )}

        {/* Music Toggle Button */}
        <button
          onClick={handleToggle}
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
          className="bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-500 transition duration-300 flex items-center gap-2"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          <span className="text-xl">{isPlaying ? "🔊" : "🔇"}</span>
          <span className="text-sm font-semibold hidden sm:inline">
            {isPlaying ? "Music On" : "Music Off"}
          </span>
        </button>
      </div>
    </div>
  );
}
