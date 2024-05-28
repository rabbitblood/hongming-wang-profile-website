"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import whiteCircle from "@/assets/white-circle.svg";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ParticleBackground() {
  const whiteCircleTexture = new THREE.TextureLoader().load(whiteCircle.src);
  const particleVertexs = useRef<THREE.BufferAttribute>(null);
  const [vertexs, setVertexs] = useState(particleVertexs.current);

  //vertexs doing circular motion
  useEffect(() => {
    console.log("vertexs", vertexs);

    if (vertexs) {
      const interval = setInterval(() => {
        for (let i = 0; i < vertexs.array.length; i += 3) {
          const x = vertexs.array[i];
          const y = vertexs.array[i + 1];
          const z = vertexs.array[i + 2];

          const radius = Math.sqrt(x * x + z * z);
          const angle = Math.atan2(z, x);

          vertexs.array[i] = radius * Math.cos(angle + 0.01);
          vertexs.array[i + 1] = y;
          vertexs.array[i + 2] = radius * Math.sin(angle + 0.01);
        }
        vertexs.needsUpdate = true;
      }, 1000 / 60);

      return () => clearInterval(interval);
    } else {
      console.error("particleVertexs.current is null");
    }
  }, [vertexs]);

  return (
    <Canvas
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <points>
        <bufferGeometry>
          <bufferAttribute
            ref={(particleVertexs) => {
              console.log(particleVertexs);
              setVertexs(particleVertexs);
            }}
            attach={"attributes-position"}
            count={10000}
            array={new Float32Array(10000 * 3).map(
              () => (Math.random() - 0.5) * 10
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.01} color="white" map={whiteCircleTexture} />
      </points>
    </Canvas>
  );
}
