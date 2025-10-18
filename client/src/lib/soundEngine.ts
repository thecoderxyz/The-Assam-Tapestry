import * as Tone from "tone";

export class SoundEngine {
  private synth: Tone.Synth | null = null;
  private melodySynth: Tone.FMSynth | null = null;
  private isInitialized = false;

  async initialize() {
    if (this.isInitialized) return;

    try {
      await Tone.start();
      this.synth = new Tone.Synth().toDestination();
      this.melodySynth = new Tone.FMSynth().toDestination();
      this.melodySynth.volume.value = -6;
      this.isInitialized = true;
      console.log("Sound engine initialized successfully");
    } catch (error) {
      console.error("Failed to initialize sound engine:", error);
    }
  }

  playSound(type: string) {
    if (!this.isInitialized || !this.synth || !this.melodySynth) {
      console.warn("Sound engine not initialized");
      return;
    }

    try {
      const now = Tone.now();

      switch (type) {
        case 'choice':
          this.synth.triggerAttackRelease("G3", "8n", now);
          break;
        case 'war_horn':
          this.synth.triggerAttackRelease("D3", "1n", now);
          break;
        case 'melody_note':
          this.melodySynth.triggerAttackRelease("A4", "4n", now);
          break;
        case 'modern_beat':
          this.synth.triggerAttackRelease("C2", "8n", now);
          this.synth.triggerAttackRelease("G2", "8n", now + 0.25);
          break;
        case 'success':
          this.melodySynth.triggerAttackRelease("C5", "8n", now);
          this.melodySynth.triggerAttackRelease("G5", "8n", now + 0.2);
          break;
        default:
          this.synth.triggerAttackRelease("C4", "8n", now);
      }
    } catch (error) {
      console.error("Failed to play sound:", error);
    }
  }

  dispose() {
    if (this.synth) {
      this.synth.dispose();
      this.synth = null;
    }
    if (this.melodySynth) {
      this.melodySynth.dispose();
      this.melodySynth = null;
    }
    this.isInitialized = false;
  }
}

export const soundEngine = new SoundEngine();
