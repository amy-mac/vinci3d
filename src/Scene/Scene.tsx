import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Pumpkin from "../Pumpkin/Pumpkin";
import { Suspense } from "react";

export default function Scene() {
  return (
    <Canvas
      aria-label="Roundish pumpkin shaped object"
      color="#fff"
      camera={{ position: [0, 1, 10] }}
      gl={{ antialias: true }}
      role="img"
      style={{ backgroundColor: "#fff" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={Math.PI} />
      <Suspense fallback="loading">
        <Pumpkin />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
