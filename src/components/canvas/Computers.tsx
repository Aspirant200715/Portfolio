import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float, Box, Sphere, Text, ContactShadows, Grid } from "@react-three/drei";

import CanvasLoader from "../Loader";

const HighFidelityPC = () => {
  return (
    <group position={[0, -2.5, 0]} rotation={[0, -0.4, 0]}>
      {/* Table Top - Lighter Slate to prevent camouflage */}
      <Box args={[12, 0.2, 5]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color='#333a4d' roughness={0.1} metalness={0.5} />
      </Box>

      {/* PC Case - Metallic Graphite for contrast */}
      <group position={[3.5, 1.4, -0.5]}>
        <Box args={[1.5, 2.5, 2.5]}>
          <meshStandardMaterial color='#4a4f5c' metalness={0.9} roughness={0.1} />
        </Box>
        {/* RGB Fans - Red Glowing Light */}
        {[...Array(3)].map((_, i) => (
          <Sphere key={i} args={[0.3, 32, 32]} position={[0.76, 0.8 - i * 0.8, 0.5]}>
            <meshStandardMaterial color='#ff3131' emissive='#ff3131' emissiveIntensity={8} />
          </Sphere>
        ))}
        <pointLight position={[1, 0, 0.5]} intensity={5} color="#ff3131" />
      </group>

      {/* Ultrawide Monitor - Metallic Frame */}
      <group position={[-0.5, 1.8, -1]}>
        {/* Monitor Back Frame - Lighter Graphite */}
        <Box args={[6, 3, 0.2]}>
          <meshStandardMaterial color='#2d333b' />
        </Box>

        {/* Screen Bezel */}
        <Box args={[6.1, 3.1, 0.05]} position={[0, 0, 0.08]}>
          <meshStandardMaterial color='#1c2128' metalness={1} roughness={0.1} />
        </Box>

        {/* The Screen Itself */}
        <Box args={[5.8, 2.8, 0.02]} position={[0, 0, 0.12]}>
          <meshStandardMaterial color='#010409' emissive='#58a6ff' emissiveIntensity={0.15} />
        </Box>

        {/* Screen Text */}
        <Text
          position={[0, 0, 0.15]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          textAlign="center"
        >
          Soham | Developer and Researcher
        </Text>

        {/* Screen Underglow */}
        <pointLight position={[0, -1.5, 0]} intensity={1.5} color="#58a6ff" />
      </group>

      {/* Keyboard */}
      <Box args={[4, 0.1, 1.5]} position={[-0.5, 0.1, 1]}>
        <meshStandardMaterial color='#0d1117' />
        <pointLight position={[0, 0.2, 0]} intensity={0.5} color="#58a6ff" />
      </Box>


      <ContactShadows opacity={0.5} scale={20} blur={2.5} far={10} />
    </group>
  );
};

const ComputersCanvas = () => {
  const [autoRotate, setAutoRotate] = React.useState(true);

  React.useEffect(() => {
    // Single Phase: Extended Cinematic 3D reveal sweep
    const timer = setTimeout(() => {
      setAutoRotate(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 5, 20], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <ambientLight intensity={1.8} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          color="#58a6ff"
        />
        
        <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <HighFidelityPC />
        </Float>

        <Grid 
          position={[0, -3.2, 0]} 
          args={[100, 100]} 
          cellColor='#58a6ff1a' 
          sectionColor='#58a6ff1a' 
          fadeDistance={50} 
          cellThickness={0.5}
          sectionThickness={1}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
