import { useEffect } from "react";
import { useGame } from "../../lib/stores/useGame";
import { useStory } from "../../lib/stores/useStory";
import { useSaveGame } from "../../lib/stores/useSaveGame";

export default function StartScreen() {
  const { start } = useGame();
  const { startStory } = useStory();
  const { hasSavedGame, loadGame, checkForSave, deleteSave } = useSaveGame();

  useEffect(() => {
    checkForSave();
  }, [checkForSave]);

  const handleStart = () => {
    startStory();
    start();
  };

  const handleLoadGame = () => {
    const loaded = loadGame();
    if (!loaded) {
      // If load failed, start new game
      handleStart();
    }
  };

  const handleDeleteSave = () => {
    if (confirm("Are you sure you want to delete your saved progress?")) {
      deleteSave();
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 p-4">
      <div className="text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 max-w-3xl w-full animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-300 tiro-bangla-regular mb-2">
          চিৰন্তন প্রতিধ্বনি
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-3 sm:mb-4">
          Echoes of Eternity: An Assam Saga
        </h2>
        <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg px-2">
          You are a Time Weaver, a silent guardian of Assam's spirit. Journey through its history, 
          meet its legends, and make choices that will echo through eternity. The tapestry of time awaits.
        </p>
        
        <div className="flex flex-col gap-3 sm:gap-4 items-center">
          <button 
            onClick={handleStart}
            className="bg-teal-500 text-gray-900 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300 text-base sm:text-lg hover:scale-105 w-full sm:min-w-[250px] sm:w-auto"
          >
            Weave the First Thread
          </button>
          
          {hasSavedGame && (
            <>
              <button 
                onClick={handleLoadGame}
                className="bg-emerald-600 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-emerald-500 transition duration-300 text-base sm:text-lg hover:scale-105 w-full sm:min-w-[250px] sm:w-auto"
              >
                Continue Your Journey
              </button>
              
              <button 
                onClick={handleDeleteSave}
                className="bg-red-700 text-white font-semibold py-2 px-5 sm:px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-xs sm:text-sm hover:scale-105"
              >
                Delete Saved Progress
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
