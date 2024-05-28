"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Geometry } from "three/examples/jsm/deprecated/Geometry.js";
import whiteCircle from "@/assets/white-circle.svg";
import { use, useEffect, useRef } from "react";

export default function ParticleBackground() {
  const whiteCircleTexture = new THREE.TextureLoader().load(whiteCircle.src);

  const particleVertexs = useRef<THREE.BufferAttribute>(null);

  //vertexs doing circular motion
  useEffect(() => {
    setTimeout(() => {
      const vertexs = particleVertexs.current;
      if (vertexs) {
        let i = 0;
        const update = () => {
          for (let i = 0; i < vertexs.array.length; i += 3) {
            const x = vertexs.array[i];
            const y = vertexs.array[i + 1];
            const z = vertexs.array[i + 2];

            const angle = Math.atan2(z, x);
            const radius = Math.sqrt(x * x + z * z);
            vertexs.array[i] = Math.cos(angle + 0.01) * radius;
            vertexs.array[i + 2] = Math.sin(angle + 0.01) * radius;
          }
          vertexs.needsUpdate = true;
        };
        const interval = setInterval(update, 1000 / 60);
        return () => clearInterval(interval);
      }
    }, 100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particleVertexs.current]);

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
            ref={particleVertexs}
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
