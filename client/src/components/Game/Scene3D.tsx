import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Scene3DProps {
  chapter: string | null;
  stage: string | null;
}

export default function Scene3D({ chapter, stage }: Scene3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate scene objects based on chapter
  const sceneObjects = useMemo(() => {
    const objects: JSX.Element[] = [];

    if (chapter === 'chapter1') {
      // Ahom Kingdom - Ancient pyramids/structures
      for (let i = 0; i < 5; i++) {
        objects.push(
          <mesh key={`pyramid-${i}`} position={[
            (Math.random() - 0.5) * 20,
            -1,
            (Math.random() - 0.5) * 10 - 5
          ]}>
            <coneGeometry args={[1, 2, 4]} />
            <meshLambertMaterial color="#5a3d34" />
          </mesh>
        );
      }
    } else if (chapter === 'chapter2') {
      // Musical Era - Floating musical notes
      for (let i = 0; i < 8; i++) {
        objects.push(
          <mesh key={`note-${i}`} position={[
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 10,
            -Math.random() * 10
          ]}>
            <torusGeometry args={[0.5, 0.2, 8, 16]} />
            <meshBasicMaterial color="#e0e7ff" transparent opacity={0.5} />
          </mesh>
        );
      }
    } else if (chapter === 'chapter3') {
      // Modern Era - Wireframe cubes
      for (let i = 0; i < 10; i++) {
        objects.push(
          <mesh key={`cube-${i}`} position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="#34d399" wireframe />
          </mesh>
        );
      }
    }

    return objects;
  }, [chapter]);

  // Background color based on chapter
  const backgroundColor = useMemo(() => {
    switch (chapter) {
      case 'chapter1':
        return new THREE.Color(0x2c1a2b);
      case 'chapter2':
        return new THREE.Color(0x1d3a58);
      case 'chapter3':
        return new THREE.Color(0x111827);
      default:
        return new THREE.Color(0x000000);
    }
  }, [chapter]);

  // Animate objects
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.y += 0.01;
        }
      });
    }
  });

  return (
    <>
      <color attach="background" args={[backgroundColor.r, backgroundColor.g, backgroundColor.b]} />
      <group ref={groupRef}>
        {sceneObjects}
      </group>
    </>
  );
}
