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
    <div className="fixed bottom-2 sm:bottom-4 right-2 sm:right-4 z-50 flex flex-col items-end gap-2">
      {/* Autoplay message */}
      {showAutoplayMessage && !isPlaying && (
        <div className="bg-yellow-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm animate-fade-in max-w-[200px] sm:max-w-none">
          Click music button to start 🎵
        </div>
      )}
      
      <div className="flex items-center gap-2">
        {/* Volume Slider */}
        {showVolumeSlider && (
          <div className="bg-gray-800 rounded-lg p-2 sm:p-3 shadow-lg border border-gray-600 flex items-center gap-1.5 sm:gap-2">
            <span className="text-xs text-gray-400 hidden sm:inline">Volume</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 sm:w-24 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
            <span className="text-xs text-gray-300 min-w-[1.5rem] sm:min-w-[2rem]">
              {Math.round(volume * 100)}%
            </span>
          </div>
        )}

        {/* Music Toggle Button */}
        <button
          onClick={handleToggle}
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
          onTouchStart={() => setShowVolumeSlider(!showVolumeSlider)}
          className="bg-indigo-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:bg-indigo-500 transition duration-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          <span className="text-lg sm:text-xl">{isPlaying ? "🔊" : "🔇"}</span>
          <span className="text-xs sm:text-sm font-semibold hidden md:inline">
            {isPlaying ? "Music On" : "Music Off"}
          </span>
        </button>
      </div>
    </div>
  );
}
