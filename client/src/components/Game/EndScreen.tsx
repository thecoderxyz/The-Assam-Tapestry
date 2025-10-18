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
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900">
      <div className="text-center p-8 animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold text-teal-300 mb-4">
          The Tapestry is Woven
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-gray-400 text-lg">
          You have witnessed the echoes of Assam's soul. The past, present, and future are intertwined. 
          Thank you for your journey, Time Weaver.
        </p>
        <button 
          onClick={handleRestart}
          className="bg-teal-500 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300 text-lg hover:scale-105"
        >
          Weave a New Story
        </button>
      </div>
    </div>
  );
}
