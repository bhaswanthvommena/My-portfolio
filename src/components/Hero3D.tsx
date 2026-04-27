"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Note: state.clock is deprecated in latest Three.js versions in favor of THREE.Timer.
      // R3F still uses Clock internally, which causes the warning in the console.
      // Using the property directly is slightly better than the method.
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#7928ca"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <AnimatedSphere />
    </Canvas>
  );
}
