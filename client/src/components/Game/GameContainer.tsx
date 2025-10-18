import { useStory } from "../../lib/stores/useStory";
import StoryBox from "./StoryBox";

export default function GameContainer() {
  return (
    <div className="min-h-screen w-full flex items-end" 
         style={{
           background: 'linear-gradient(to top, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.8) 50%, rgba(17, 24, 39, 0) 100%)'
         }}>
      <StoryBox />
    </div>
  );
}
