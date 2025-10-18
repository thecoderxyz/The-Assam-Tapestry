import { useEffect } from "react";
import { useStory } from "../../lib/stores/useStory";
import { useMusic } from "../../lib/stores/useMusic";
import StoryBox from "./StoryBox";
import AchievementsPanel from "./AchievementsPanel";
import MusicControls from "./MusicControls";

export default function GameContainer() {
  const { playMusic } = useMusic();

  useEffect(() => {
    // Auto-play music when game starts (with fallback for autoplay restrictions)
    const timer = setTimeout(() => {
      playMusic('/sounds/background.mp3');
    }, 500);
    
    return () => clearTimeout(timer);
  }, [playMusic]);

  return (
    <>
      <AchievementsPanel />
      <MusicControls />
      <div className="min-h-screen w-full flex items-end pb-16 sm:pb-20" 
           style={{
             background: 'linear-gradient(to top, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.8) 50%, rgba(17, 24, 39, 0) 100%)'
           }}>
        <StoryBox />
      </div>
    </>
  );
}
