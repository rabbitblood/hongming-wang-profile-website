"use client";
import { PLYLoader } from "three/examples/jsm/Addons.js";
import { Canvas, useLoader } from "@react-three/fiber";
import myModel from "@/assets/3dmodels/myModelNoColor.ply";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function My3dModel() {
  const modelobj = useLoader(PLYLoader, myModel);
  const model =
    useRef<
      THREE.Points<
        THREE.BufferGeometry<THREE.NormalBufferAttributes>,
        THREE.Material | THREE.Material[],
        THREE.Object3DEventMap
      >
    >(null);
  const [modelMoveDirection, setModelMoveDirection] = useState(1);

  //get mouse pose percentage related to the browser window
  //and set the camera rotation based on the mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState({ r: 125, g: 125, b: 125 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    if (model.current) {
      model.current.rotation.y = (mousePos.x - 0.5) * 0.1;
      model.current.rotation.x = (mousePos.y - 0.5) * 0.1;
    }
  }, [mousePos]);

  //model animation
  useEffect(() => {
    const MAX_Y = 0.1;
    const MIN_Y = -0.1;
    const SPEED = 0.0001;

    const cameraRotationInterval = setInterval(() => {
      requestAnimationFrame(() => {
        //model rotation
        if (model.current) {
          if (Number(model.current.rotation.y) > MAX_Y) {
            setModelMoveDirection(-1);
          } else if (Number(model.current.rotation.y) < MIN_Y) {
            setModelMoveDirection(1);
          }

          model.current.rotation.y += SPEED * modelMoveDirection;
        }

        //model color
        const r = Math.round(color.r + Math.random() * 4 - 2);
        const g = Math.round(color.g + Math.random() * 4 - 2);
        const b = Math.round(color.b + Math.random() * 4 - 2);
        setColor({ r, g, b });
      });
    }, 1000 / 60);

    return () => clearInterval(cameraRotationInterval);
  }, [color.b, color.g, color.r, modelMoveDirection]);

  return (
    <>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <PerspectiveCamera makeDefault position={[-0, 0, 0.8]} />
        <points ref={model} geometry={modelobj as THREE.BufferGeometry}>
          <pointsMaterial
            size={0.001}
            color={`rgb(${color.r}, ${color.g},${color.b})`}
          />
        </points>
      </Canvas>
    </>
  );
}
