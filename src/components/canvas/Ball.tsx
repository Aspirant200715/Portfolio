import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef<any>(null);
  const [rotationSpeed, setRotationSpeed] = useState(10); // Start fast

  useFrame((_state, delta) => {
    if (meshRef.current) {
      // Rapidly decelerate rotation on mount
      if (rotationSpeed > 0.1) {
        meshRef.current.rotation.y += rotationSpeed * delta;
        meshRef.current.rotation.x += rotationSpeed * delta * 0.5;
        setRotationSpeed((prev) => prev * 0.96); // Dampening speed
      } else {
        // Once slow, smoothly align back to front (0,0) so decal is visible
        meshRef.current.rotation.y %= (Math.PI * 2);
        meshRef.current.rotation.x %= (Math.PI * 2);
        
        meshRef.current.rotation.y *= 0.9;
        meshRef.current.rotation.x *= 0.9;
      }
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetUnits={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            // @ts-ignore
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
