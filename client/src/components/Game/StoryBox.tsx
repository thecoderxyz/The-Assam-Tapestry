import { useStory } from "../../lib/stores/useStory";
import { useSoundEngine } from "../../lib/stores/useSound";
import { storyData } from "../../lib/storyData";

export default function StoryBox() {
  const { currentChapter, currentStage, setStage } = useStory();
  const { playSound } = useSoundEngine();

  if (!currentChapter || !currentStage) return null;

  const chapter = storyData[currentChapter];
  const stage = chapter.stages[currentStage];

  const handleChoice = (choice: any) => {
    // Play sound
    playSound('choice');
    
    const nextChapter = choice.chapter || currentChapter;
    const nextStage = choice.next;
    
    setStage(nextChapter, nextStage);
  };

  return (
    <div className="w-full mb-8 mx-4">
      <div 
        className="story-box w-full max-w-4xl mx-auto animate-fade-in"
        style={{
          backgroundColor: 'rgba(31, 41, 55, 0.85)',
          border: '1px solid #4b5563',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}
      >
        {/* Image Container */}
        <div 
          className="mb-4"
          style={{
            borderRadius: '0.5rem',
            overflow: 'hidden',
            border: '1px solid #4b5563',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
          }}
        >
          <img 
            src={stage.image} 
            alt="Scene" 
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Story Text */}
        <div className="text-lg leading-relaxed mb-6 text-gray-300">
          {stage.text}
        </div>

        {/* Choices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stage.choices.map((choice: any, index: number) => (
            <button
              key={index}
              onClick={() => handleChoice(choice)}
              className="w-full bg-gray-800 p-4 rounded-lg shadow-sm text-left text-gray-300 border border-gray-600 transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg hover:border-teal-400"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
