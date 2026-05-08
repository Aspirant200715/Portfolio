import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Sphere, Torus, Stars } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Planet = () => {
  return (
    <group scale={0.7}> {/* Reduced scale as requested */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#58a6ff" intensity={2} />
      
      {/* Multi-colored Core */}
      <Sphere args={[1, 64, 64]} scale={2.5}>
        <meshStandardMaterial
          color='#0d1117'
          roughness={0.5}
          metalness={1}
        />
      </Sphere>
      
      {/* Multi-colored Continental Glow (Cyan/Purple/Green) */}
      <Sphere args={[1.02, 32, 32]} scale={2.52}>
        <meshStandardMaterial
          color='#58a6ff'
          emissive='#58a6ff'
          emissiveIntensity={0.5}
          wireframe
        />
      </Sphere>
      <Sphere args={[1.03, 16, 16]} scale={2.53} rotation={[1, 1, 1]}>
        <meshStandardMaterial
          color='#915EFF'
          emissive='#915EFF'
          emissiveIntensity={0.4}
          wireframe
        />
      </Sphere>
      <Sphere args={[1.04, 8, 8]} scale={2.54} rotation={[-1, 2, 0.5]}>
        <meshStandardMaterial
          color='#00cea8'
          emissive='#00cea8'
          emissiveIntensity={0.3}
          wireframe
        />
      </Sphere>
      
      {/* Atmosphere Shell */}
      <Sphere args={[1.1, 64, 64]} scale={2.6}>
        <meshStandardMaterial
          color='#58a6ff'
          transparent
          opacity={0.1}
        />
      </Sphere>
      
      {/* Multi-colored Orbital Rings */}
      <Torus args={[1.6, 0.01, 16, 100]} scale={2.5} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color='#58a6ff' emissive='#58a6ff' emissiveIntensity={2} />
      </Torus>
      <Torus args={[1.8, 0.005, 16, 100]} scale={2.5} rotation={[Math.PI / 3, 0.5, 0]}>
        <meshStandardMaterial color='#915EFF' emissive='#915EFF' emissiveIntensity={2} />
      </Torus>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
