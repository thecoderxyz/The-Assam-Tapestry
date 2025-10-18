import { useEffect } from "react";
import { useStory } from "../../lib/stores/useStory";
import { useSoundEngine } from "../../lib/stores/useSound";
import { useSaveGame } from "../../lib/stores/useSaveGame";
import { useAchievements } from "../../lib/stores/useAchievements";
import { storyData } from "../../lib/storyData";

export default function StoryBox() {
  const { currentChapter, currentStage, setStage, addChoice } = useStory();
  const { playSound } = useSoundEngine();
  const { saveGame } = useSaveGame();
  const { checkAchievements } = useAchievements();

  useEffect(() => {
    checkAchievements();
    
    // Play stage sound effect automatically
    if (currentChapter && currentStage) {
      const chapter = storyData[currentChapter];
      const stage = chapter.stages[currentStage];
      if (stage.sound) {
        playSound(stage.sound);
      }
    }
  }, [currentStage, checkAchievements, playSound, currentChapter]);

  if (!currentChapter || !currentStage) return null;

  const chapter = storyData[currentChapter];
  const stage = chapter.stages[currentStage];

  const handleChoice = (choice: any) => {
    // Track choice made
    const choiceKey = `${currentChapter}:${currentStage}:${choice.text}`;
    addChoice(choiceKey);
    
    // Play sound
    playSound('choice');
    
    const nextChapter = choice.chapter || currentChapter;
    const nextStage = choice.next;
    
    setStage(nextChapter, nextStage);
    
    // Auto-save after each choice
    setTimeout(() => saveGame(), 100);
  };

  const handleManualSave = () => {
    saveGame();
    playSound('success');
  };

  const getChapterTheme = () => {
    switch (currentChapter) {
      case 'chapter1':
        return {
          gradient: 'from-amber-900/20 to-gray-800/20',
          border: 'border-amber-700/50',
          glow: 'shadow-amber-900/30'
        };
      case 'chapter2':
        return {
          gradient: 'from-blue-900/20 to-gray-800/20',
          border: 'border-blue-700/50',
          glow: 'shadow-blue-900/30'
        };
      case 'chapter3':
        return {
          gradient: 'from-emerald-900/20 to-gray-800/20',
          border: 'border-emerald-700/50',
          glow: 'shadow-emerald-900/30'
        };
      default:
        return {
          gradient: 'from-gray-800/20 to-gray-900/20',
          border: 'border-gray-700/50',
          glow: 'shadow-gray-900/30'
        };
    }
  };

  const theme = getChapterTheme();

  return (
    <div className="w-full mb-8 px-2 sm:px-4">
      <div 
        className={`w-full max-w-4xl mx-auto animate-fade-in bg-gradient-to-br ${theme.gradient} backdrop-blur-lg border-2 ${theme.border} rounded-xl p-3 sm:p-4 md:p-6 shadow-2xl ${theme.glow}`}
      >
        {/* Chapter indicator */}
        <div className="mb-3 sm:mb-4 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-teal-400 text-xs sm:text-sm font-semibold animate-pulse-slow">
              {chapter.title}
            </span>
          </div>
          <div className="flex gap-1.5 sm:gap-2">
            {['chapter1', 'chapter2', 'chapter3'].map((ch, idx) => (
              <div
                key={ch}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  ch === currentChapter ? 'bg-teal-400 w-4 sm:w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image Container */}
        <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden border-2 border-gray-600/50 shadow-xl animate-slide-in">
          <img 
            src={stage.image} 
            alt="Scene" 
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Story Text */}
        <div className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-200 bg-gray-900/30 p-3 sm:p-4 rounded-lg animate-slide-in">
          {stage.text}
        </div>

        {/* Choices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 animate-slide-in">
          {stage.choices.map((choice: any, index: number) => (
            <button
              key={index}
              onClick={() => handleChoice(choice)}
              className="group relative w-full bg-gradient-to-br from-gray-800 to-gray-900 p-3 sm:p-4 rounded-lg shadow-md text-left text-gray-200 border-2 border-gray-600 transition-all duration-300 hover:bg-gradient-to-br hover:from-teal-800 hover:to-gray-800 hover:scale-105 hover:shadow-xl hover:border-teal-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 font-medium text-sm sm:text-base">{choice.text}</span>
            </button>
          ))}
        </div>

        {/* Save Button */}
        <div className="mt-4 sm:mt-6 text-center">
          <button
            onClick={handleManualSave}
            className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-teal-500/50 hover:from-teal-500 hover:to-teal-600 transition-all duration-300 text-xs sm:text-sm font-semibold hover:scale-105"
          >
            💾 Save Progress
          </button>
        </div>
      </div>
    </div>
  );
}
