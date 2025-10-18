import { create } from "zustand";
import * as Tone from "tone";

interface SoundState {
  isInitialized: boolean;
  synth: Tone.Synth | null;
  melodySynth: Tone.FMSynth | null;
  
  // Actions
  initializeSound: () => void;
  playSound: (type: string) => void;
}

export const useSoundEngine = create<SoundState>((set, get) => ({
  isInitialized: false,
  synth: null,
  melodySynth: null,
  
  initializeSound: async () => {
    const state = get();
    if (state.isInitialized) return;
    
    try {
      await Tone.start();
      
      const synth = new Tone.Synth().toDestination();
      const melodySynth = new Tone.FMSynth().toDestination();
      melodySynth.volume.value = -6;
      
      set({
        isInitialized: true,
        synth,
        melodySynth
      });
      
      console.log("Sound engine initialized");
    } catch (error) {
      console.error("Failed to initialize sound:", error);
    }
  },
  
  playSound: (type: string) => {
    const { synth, melodySynth, isInitialized } = get();
    
    if (!isInitialized || !synth || !melodySynth) return;
    
    try {
      const now = Tone.now();
      
      switch (type) {
        case 'choice':
          synth.triggerAttackRelease("G3", "8n", now);
          break;
        case 'war_horn':
          synth.triggerAttackRelease("D3", "1n", now);
          break;
        case 'melody_note':
          melodySynth.triggerAttackRelease("A4", "4n", now);
          break;
        case 'modern_beat':
          synth.triggerAttackRelease("C2", "8n", now);
          synth.triggerAttackRelease("G2", "8n", now + 0.25);
          break;
        case 'success':
          melodySynth.triggerAttackRelease("C5", "8n", now);
          melodySynth.triggerAttackRelease("G5", "8n", now + 0.2);
          break;
        default:
          synth.triggerAttackRelease("C4", "8n", now);
      }
    } catch (error) {
      console.error("Failed to play sound:", error);
    }
  }
}));
