import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { useGame } from "./useGame";
import { useSoundEngine } from "./useSound";

interface StoryState {
  currentChapter: string | null;
  currentStage: string | null;
  
  // Actions
  startStory: () => void;
  setStage: (chapter: string, stage: string) => void;
}

export const useStory = create<StoryState>()(
  subscribeWithSelector((set, get) => ({
    currentChapter: null,
    currentStage: null,
    
    startStory: () => {
      set({
        currentChapter: "chapter1",
        currentStage: "intro"
      });
    },
    
    setStage: (chapter: string, stage: string) => {
      if (chapter === 'end') {
        const { end } = useGame.getState();
        end();
        return;
      }
      
      set({
        currentChapter: chapter,
        currentStage: stage
      });
    }
  }))
);
