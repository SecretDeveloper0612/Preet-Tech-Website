
import React, { useRef, useMemo, memo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Preload, Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const NeuralCore = memo(() => {
  const coreRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.2;
      coreRef.current.rotation.z = time * 0.1;
    }

    if (wireRef.current) {
      wireRef.current.rotation.y = -time * 0.3;
      wireRef.current.rotation.x = time * 0.2;
    }

    if (outerRef.current) {
      outerRef.current.rotation.y = time * 0.05;
      outerRef.current.scale.setScalar(1 + Math.sin(time) * 0.05);
    }
  });

  return (
    <group scale={0.6}>
      {/* 1. DISTORTED ENERGY CORE */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[2, 10]} />
        <MeshDistortMaterial
          color="#6366f1"
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#6366f1"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* 2. EVOLVING HYPER-GRID */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[2.5, 3]} />
        <meshStandardMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 3. ATMOSPHERIC SHIMMER */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshPhongMaterial
          color="#4f46e5"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 4. ORBITAL DATA RINGS */}
      {[...Array(3)].map((_, i) => (
        <group key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <mesh>
            <torusGeometry args={[3.2 + i * 0.2, 0.01, 16, 100]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
});

const NeuralParticles = memo(({ count = 1500, isDark }: { count?: number; isDark: boolean }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    const colorArr = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 4; // Smaller particle radius
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);

      // Vibrant cyan/indigo palette
      color.setHex(Math.random() > 0.5 ? 0x6366f1 : 0x0ea5e9);
      colorArr[i * 3] = color.r;
      colorArr[i * 3 + 1] = color.g;
      colorArr[i * 3 + 2] = color.b;
    }
    return { positions: p, colors: colorArr };
  }, [count]);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x += 0.0005;
    }
  });

  return (
    <Points ref={ref} positions={points.positions} colors={points.colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={isDark ? 0.02 : 0.04}
        sizeAttenuation={true}
        depthWrite={false}
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        opacity={isDark ? 1 : 0.8}
      />
    </Points>
  );
});

interface ThreeSphereProps {
  isDark?: boolean;
}

const ThreeSphereScene: React.FC<ThreeSphereProps> = ({ isDark: _ignoredIsDark }) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = mounted ? currentTheme === 'dark' : false;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0ea5e9" />
        <spotLight position={[0, 0, 8]} intensity={1.5} angle={0.5} penumbra={1} color="#ffffff" />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Suspense fallback={null}>
            <NeuralParticles count={2000} isDark={isDark} />
          </Suspense>
        </Float>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default memo(ThreeSphereScene);
