import { useGame } from "../../lib/stores/useGame";
import { useStory } from "../../lib/stores/useStory";

export default function EndScreen() {
  const { restart } = useGame();
  const { startStory } = useStory();

  const handleRestart = () => {
    startStory();
    restart();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 max-w-3xl w-full animate-fade-in">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-300 mb-3 sm:mb-4">
          The Tapestry is Woven
        </h2>
        <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg px-2">
          You have witnessed the echoes of Assam's soul. The past, present, and future are intertwined. 
          Thank you for your journey, Time Weaver.
        </p>
        <button 
          onClick={handleRestart}
          className="bg-teal-500 text-gray-900 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300 text-base sm:text-lg hover:scale-105 w-full sm:w-auto sm:min-w-[250px]"
        >
          Weave a New Story
        </button>
      </div>
    </div>
  );
}
