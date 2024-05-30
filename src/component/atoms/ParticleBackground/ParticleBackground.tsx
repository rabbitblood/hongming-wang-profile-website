"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import whiteCircle from "@/assets/white-circle.svg";
import { useCallback, useEffect, useRef, useState } from "react";

interface ParticleBackgroundProps {
  particleAmount?: number;
  color?: string;
  style?: React.CSSProperties;
}

export default function ParticleBackground({
  particleAmount = 10000,
  color = "white",
  style,
  ...props
}: ParticleBackgroundProps) {
  const whiteCircleTexture = new THREE.TextureLoader().load(whiteCircle.src);
  const particleVertexs = useRef<THREE.BufferAttribute>(null);
  const [vertexs, setVertexs] = useState(particleVertexs.current);

  //vertexs doing circular motion
  useEffect(() => {
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
    }
  }, [vertexs]);

  return (
    <Canvas style={style}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <points>
        <bufferGeometry>
          <bufferAttribute
            ref={(particleVertexs) => {
              setVertexs(particleVertexs);
            }}
            attach={"attributes-position"}
            count={particleAmount}
            array={new Float32Array(particleAmount * 3).map(
              () => (Math.random() - 0.5) * 10
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.01} color={color} map={whiteCircleTexture} />
      </points>
    </Canvas>
  );
}
