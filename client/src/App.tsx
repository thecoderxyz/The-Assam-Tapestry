import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "@fontsource/inter";
import { useGame } from "./lib/stores/useGame";
import { useStory } from "./lib/stores/useStory";
import { useSoundEngine } from "./lib/stores/useSound";
import StartScreen from "./components/Game/StartScreen";
import GameContainer from "./components/Game/GameContainer";
import EndScreen from "./components/Game/EndScreen";
import Scene3D from "./components/Game/Scene3D";

// Main App component
function App() {
  const { phase } = useGame();
  const { currentChapter, currentStage } = useStory();
  const { initializeSound } = useSoundEngine();

  // Initialize sound engine on first interaction
  const handleFirstInteraction = () => {
    initializeSound();
  };

  return (
    <div 
      style={{ width: '100%', minHeight: '100vh', position: 'relative' }}
      onClick={handleFirstInteraction}
    >
      {/* 3D Background Canvas - Fixed position */}
      <Canvas
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={[0, 0, 0]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 7.5]} intensity={0.8} />
        
        <Suspense fallback={null}>
          <Scene3D chapter={currentChapter} stage={currentStage} />
        </Suspense>
      </Canvas>

      {/* UI Layer - Can scroll */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', minHeight: '100vh' }}>
        {phase === 'ready' && <StartScreen />}
        {phase === 'playing' && <GameContainer />}
        {phase === 'ended' && <EndScreen />}
      </div>
    </div>
  );
}

export default App;
