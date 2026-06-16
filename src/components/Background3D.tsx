"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial, Text } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { useScroll, useTransform } from "framer-motion";

function ParticleField({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  const timeRef = useRef(0);
  
  useFrame((state, delta) => {
    if (ref.current) {
      timeRef.current += delta;
      ref.current.rotation.y = timeRef.current * 0.05;
      ref.current.rotation.x = timeRef.current * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f2ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function DataNodes({ scrollProgress }: { scrollProgress: any }) {
  const groupRef = useRef<THREE.Group>(null);
  const rotationY = useTransform(scrollProgress, [0, 1], [0, Math.PI * 2]);
  const positionZ = useTransform(scrollProgress, [0, 1], [0, -10]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY.get();
      groupRef.current.position.z = positionZ.get();
    }
  });

  const nodes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      size: Math.random() * 0.5 + 0.2
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={node.position}>
            <boxGeometry args={[node.size, node.size, node.size]} />
            <meshStandardMaterial 
              color="#bc13fe" 
              wireframe 
              transparent 
              opacity={0.3} 
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function NeuralNetwork({ count = 25 }) {
  const points = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      pos: new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15),
      connected: [] as number[]
    }));
  }, [count]);

  return (
    <group>
      {points.map((p, i) => (
        <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={p.pos}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={0.5} transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function FloatingRings({ scrollProgress }: { scrollProgress: any }) {
  const ref = useRef<THREE.Group>(null);
  const rotationZ = useTransform(scrollProgress, [0, 1], [0, Math.PI * 4]);
  const timeRef = useRef(0);
  
  useFrame((state, delta) => {
    if (ref.current) {
      timeRef.current += delta;
      ref.current.rotation.z = rotationZ.get() + timeRef.current * 0.05;
      ref.current.rotation.y = timeRef.current * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4, 0.01, 16, 100]} />
        <meshStandardMaterial color="#bc13fe" transparent opacity={0.1} />
      </mesh>
      <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
        <torusGeometry args={[4.5, 0.005, 16, 100]} />
        <meshStandardMaterial color="#00f2ff" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

function TechCore({ scrollProgress }: { scrollProgress: any }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [1.5, 4, 1.5]);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (meshRef.current) {
      timeRef.current += delta;
      const time = timeRef.current;
      meshRef.current.rotation.x = time * 0.05;
      meshRef.current.rotation.y = time * 0.08;
      meshRef.current.scale.setScalar(scale.get());
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#0071e3"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.4}
        metalness={0.6}
        wireframe
        transparent
        opacity={0.15}
      />
    </Sphere>
  );
}

function FloatingText({ scrollProgress }: { scrollProgress: any }) {
  const words = ["AI", "DATA", "SQL", "GROWTH", "SYSTEMS", "CODE", "CLOUD"];

  return (
    <group>
      {words.map((word, i) => (
        <Float key={i} speed={1} rotationIntensity={1} floatIntensity={2}>
          <Text
            position={[
              (Math.random() - 0.5) * 16,
              (Math.random() - 0.5) * 16,
              (Math.random() - 0.5) * 10 - 5
            ]}
            fontSize={0.2}
            color="#fff"
            fillOpacity={0.08}
          >
            {word}
          </Text>
        </Float>
      ))}
    </group>
  );
}

export default function Background3D() {
  const { scrollYProgress } = useScroll();

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: -1,
      pointerEvents: "none",
      background: "#020203"
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00f2ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
        
        <ParticleField count={2000} />
        <NeuralNetwork count={20} />
        <FloatingText scrollProgress={scrollYProgress} />
        <FloatingRings scrollProgress={scrollYProgress} />
        <DataNodes scrollProgress={scrollYProgress} />
        <TechCore scrollProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
