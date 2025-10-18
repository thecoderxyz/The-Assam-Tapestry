import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { useGame } from "./useGame";
import { useSoundEngine } from "./useSound";

interface StoryState {
  currentChapter: string | null;
  currentStage: string | null;
  choicesMade: string[];
  
  // Actions
  startStory: () => void;
  setStage: (chapter: string, stage: string) => void;
  addChoice: (choice: string) => void;
  setChoicesMade: (choices: string[]) => void;
  resetChoices: () => void;
}

export const useStory = create<StoryState>()(
  subscribeWithSelector((set, get) => ({
    currentChapter: null,
    currentStage: null,
    choicesMade: [],
    
    startStory: () => {
      set({
        currentChapter: "chapter1",
        currentStage: "intro",
        choicesMade: []
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
    },
    
    addChoice: (choice: string) => {
      set((state) => ({
        choicesMade: [...state.choicesMade, choice]
      }));
    },
    
    setChoicesMade: (choices: string[]) => {
      set({ choicesMade: choices });
    },
    
    resetChoices: () => {
      set({ choicesMade: [] });
    }
  }))
);
