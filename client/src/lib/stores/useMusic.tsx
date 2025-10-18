import { create } from "zustand";

interface MusicState {
  isPlaying: boolean;
  volume: number;
  currentTrack: string | null;
  audioElement: HTMLAudioElement | null;
  
  // Actions
  initializeMusic: () => void;
  playMusic: (track?: string) => void;
  pauseMusic: () => void;
  toggleMusic: () => void;
  setVolume: (volume: number) => void;
  cleanup: () => void;
}

export const useMusic = create<MusicState>((set, get) => ({
  isPlaying: false,
  volume: 0.3,
  currentTrack: null,
  audioElement: null,
  
  initializeMusic: () => {
    const state = get();
    if (state.audioElement) return;
    
    const audio = new Audio('/sounds/background.mp3');
    audio.loop = true;
    audio.volume = state.volume;
    
    set({ audioElement: audio });
    console.log("Music initialized");
  },
  
  playMusic: (track?: string) => {
    const state = get();
    
    if (!state.audioElement) {
      get().initializeMusic();
    }
    
    const audio = get().audioElement;
    if (!audio) return;
    
    if (track && track !== state.currentTrack) {
      audio.src = track;
      set({ currentTrack: track });
    }
    
    audio.play().then(() => {
      set({ isPlaying: true });
      console.log("Music playing");
    }).catch((error) => {
      console.error("Failed to play music:", error);
    });
  },
  
  pauseMusic: () => {
    const { audioElement } = get();
    if (audioElement) {
      audioElement.pause();
      set({ isPlaying: false });
    }
  },
  
  toggleMusic: () => {
    const { isPlaying } = get();
    if (isPlaying) {
      get().pauseMusic();
    } else {
      get().playMusic();
    }
  },
  
  setVolume: (volume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, volume));
    const { audioElement } = get();
    
    if (audioElement) {
      audioElement.volume = clampedVolume;
    }
    
    set({ volume: clampedVolume });
  },
  
  cleanup: () => {
    const { audioElement } = get();
    if (audioElement) {
      audioElement.pause();
      audioElement.src = '';
      set({ audioElement: null, isPlaying: false });
    }
  }
}));
