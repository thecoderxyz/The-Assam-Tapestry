import { create } from "zustand";
import { useStory } from "./useStory";
import { useGame } from "./useGame";

interface SaveData {
  currentChapter: string;
  currentStage: string;
  choicesMade: string[];
  timestamp: number;
}

interface SaveGameState {
  hasSavedGame: boolean;
  
  // Actions
  saveGame: () => void;
  loadGame: () => boolean;
  deleteSave: () => void;
  checkForSave: () => void;
}

const SAVE_KEY = "echoes_of_eternity_save";

export const useSaveGame = create<SaveGameState>((set, get) => ({
  hasSavedGame: false,
  
  saveGame: () => {
    const storyState = useStory.getState();
    const saveData: SaveData = {
      currentChapter: storyState.currentChapter || "chapter1",
      currentStage: storyState.currentStage || "intro",
      choicesMade: storyState.choicesMade || [],
      timestamp: Date.now()
    };
    
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
      set({ hasSavedGame: true });
      console.log("Game saved successfully");
      return true;
    } catch (error) {
      console.error("Failed to save game:", error);
      return false;
    }
  },
  
  loadGame: () => {
    try {
      const savedData = localStorage.getItem(SAVE_KEY);
      if (!savedData) {
        console.log("No saved game found");
        return false;
      }
      
      const saveData: SaveData = JSON.parse(savedData);
      const storyState = useStory.getState();
      
      // Restore story state
      storyState.setStage(saveData.currentChapter, saveData.currentStage);
      storyState.setChoicesMade(saveData.choicesMade);
      
      // Start the game
      const gameState = useGame.getState();
      gameState.start();
      
      console.log("Game loaded successfully");
      set({ hasSavedGame: true });
      return true;
    } catch (error) {
      console.error("Failed to load game:", error);
      return false;
    }
  },
  
  deleteSave: () => {
    try {
      localStorage.removeItem(SAVE_KEY);
      set({ hasSavedGame: false });
      console.log("Save deleted");
    } catch (error) {
      console.error("Failed to delete save:", error);
    }
  },
  
  checkForSave: () => {
    const savedData = localStorage.getItem(SAVE_KEY);
    set({ hasSavedGame: !!savedData });
  }
}));
