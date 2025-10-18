import { create } from "zustand";
import { useStory } from "./useStory";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: number;
}

interface AchievementsState {
  achievements: Achievement[];
  
  // Actions
  checkAchievements: () => void;
  unlockAchievement: (id: string) => void;
  loadAchievements: () => void;
  saveAchievements: () => void;
}

const ACHIEVEMENTS_KEY = "echoes_achievements";

const defaultAchievements: Achievement[] = [
  {
    id: "first_choice",
    title: "The First Thread",
    description: "Make your first choice in the tapestry of time",
    icon: "🧵",
    unlocked: false
  },
  {
    id: "lachit_victory",
    title: "Warrior's Honor",
    description: "Lead Lachit to victory at Saraighat",
    icon: "⚔️",
    unlocked: false
  },
  {
    id: "global_voice",
    title: "Cultural Ambassador",
    description: "Help Bhupen share Assam's voice with the world",
    icon: "🎵",
    unlocked: false
  },
  {
    id: "independent_spirit",
    title: "Rebel's Heart",
    description: "Stay true to artistic freedom with Zubeen",
    icon: "🎸",
    unlocked: false
  },
  {
    id: "complete_journey",
    title: "Master Weaver",
    description: "Complete the entire tapestry without retry",
    icon: "🏆",
    unlocked: false
  },
  {
    id: "all_chapters",
    title: "Time Traveler",
    description: "Visit all three eras of Assamese history",
    icon: "⏳",
    unlocked: false
  },
  {
    id: "perfect_path",
    title: "Golden Thread",
    description: "Make all the optimal choices in one playthrough",
    icon: "✨",
    unlocked: false
  },
  {
    id: "explorer",
    title: "Path Explorer",
    description: "Try different choices to see alternative outcomes",
    icon: "🗺️",
    unlocked: false
  }
];

export const useAchievements = create<AchievementsState>((set, get) => ({
  achievements: defaultAchievements,
  
  checkAchievements: () => {
    const { choicesMade } = useStory.getState();
    const state = get();
    
    // First choice
    if (choicesMade.length >= 1 && !state.achievements.find(a => a.id === "first_choice")?.unlocked) {
      get().unlockAchievement("first_choice");
    }
    
    // Lachit victory
    if (choicesMade.some(c => c.includes("Advise him to trust the fiery passion of Lachit")) && 
        !state.achievements.find(a => a.id === "lachit_victory")?.unlocked) {
      get().unlockAchievement("lachit_victory");
    }
    
    // Global voice
    if (choicesMade.some(c => c.includes("Encourage him to share Assam's voice with the world")) && 
        !state.achievements.find(a => a.id === "global_voice")?.unlocked) {
      get().unlockAchievement("global_voice");
    }
    
    // Independent spirit
    if (choicesMade.some(c => c.includes("Stay true to his independent spirit")) && 
        !state.achievements.find(a => a.id === "independent_spirit")?.unlocked) {
      get().unlockAchievement("independent_spirit");
    }
    
    // All chapters visited
    const visitedChapter1 = choicesMade.some(c => c.startsWith("chapter1:"));
    const visitedChapter2 = choicesMade.some(c => c.startsWith("chapter2:"));
    const visitedChapter3 = choicesMade.some(c => c.startsWith("chapter3:"));
    
    if (visitedChapter1 && visitedChapter2 && visitedChapter3 && 
        !state.achievements.find(a => a.id === "all_chapters")?.unlocked) {
      get().unlockAchievement("all_chapters");
    }
    
    // Perfect path (all optimal choices without retries)
    const hasLachit = choicesMade.some(c => c.includes("Advise him to trust the fiery passion of Lachit"));
    const hasGlobal = choicesMade.some(c => c.includes("Encourage him to share Assam's voice with the world"));
    const hasIndependent = choicesMade.some(c => c.includes("Stay true to his independent spirit"));
    const hasRetries = choicesMade.some(c => c.includes("Retry"));
    
    if (hasLachit && hasGlobal && hasIndependent && !hasRetries && 
        !state.achievements.find(a => a.id === "perfect_path")?.unlocked) {
      get().unlockAchievement("perfect_path");
    }
    
    // Explorer (tried different paths)
    if (choicesMade.some(c => c.includes("Retry")) && 
        !state.achievements.find(a => a.id === "explorer")?.unlocked) {
      get().unlockAchievement("explorer");
    }
    
    // Complete journey (reached the end)
    if (choicesMade.some(c => c.includes("Complete the tapestry")) && 
        !state.achievements.find(a => a.id === "complete_journey")?.unlocked) {
      get().unlockAchievement("complete_journey");
    }
  },
  
  unlockAchievement: (id: string) => {
    set((state) => ({
      achievements: state.achievements.map(a => 
        a.id === id ? { ...a, unlocked: true, unlockedAt: Date.now() } : a
      )
    }));
    get().saveAchievements();
  },
  
  loadAchievements: () => {
    try {
      const saved = localStorage.getItem(ACHIEVEMENTS_KEY);
      if (saved) {
        const loadedAchievements = JSON.parse(saved);
        set({ achievements: loadedAchievements });
      }
    } catch (error) {
      console.error("Failed to load achievements:", error);
    }
  },
  
  saveAchievements: () => {
    try {
      const { achievements } = get();
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
    } catch (error) {
      console.error("Failed to save achievements:", error);
    }
  }
}));
