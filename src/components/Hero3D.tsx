"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function DataCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  // Generate random points in a sphere manually to avoid external dependencies
  const spherePoints = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const radius = 1.8;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = radius * Math.cbrt(Math.random());
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    timeRef.current += delta;
    const time = timeRef.current;
    
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      // Gentle pulsing scale
      const scale = 1 + Math.sin(time * 2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
    
    if (pointsRef.current) {
      pointsRef.current.rotation.x = time * -0.1;
      pointsRef.current.rotation.y = time * -0.15;
    }
  });

  return (
    <group>
      {/* The wireframe core */}
      <Icosahedron ref={meshRef} args={[1.2, 2]}>
        <meshBasicMaterial color="#00f2ff" wireframe transparent opacity={0.3} />
      </Icosahedron>

      {/* The data particles surrounding it */}
      <Points ref={pointsRef} positions={spherePoints} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#7928ca"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <DataCore />
    </Canvas>
  );
}
