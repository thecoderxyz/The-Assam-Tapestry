import { useGame } from "../../lib/stores/useGame";
import { useStory } from "../../lib/stores/useStory";

export default function StartScreen() {
  const { start } = useGame();
  const { startStory } = useStory();

  const handleStart = () => {
    startStory();
    start();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900">
      <div className="text-center p-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-teal-300 tiro-bangla-regular mb-2">
          চিৰন্তন প্রতিধ্বনি
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-4">
          Echoes of Eternity: An Assam Saga
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-gray-400 text-lg">
          You are a Time Weaver, a silent guardian of Assam's spirit. Journey through its history, 
          meet its legends, and make choices that will echo through eternity. The tapestry of time awaits.
        </p>
        <button 
          onClick={handleStart}
          className="bg-teal-500 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300 text-lg hover:scale-105"
        >
          Weave the First Thread
        </button>
      </div>
    </div>
  );
}
