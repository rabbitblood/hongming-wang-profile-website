"use client";
import { PLYLoader } from "three/examples/jsm/Addons.js";
import { Canvas, useLoader } from "@react-three/fiber";
import myModel from "@/assets/3dmodels/myModelNoColor.ply";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import useCheckMobileScreen from "@/hooks/useCheckMobile";

export default function My3dModel() {
  const isMobile = useCheckMobileScreen();
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
  const [modelsize, setModelSize] = useState(1);
  const camera = useRef<THREE.PerspectiveCamera>(null);
  const [originalModelVertices] = useState<THREE.TypedArray>(
    (modelobj as THREE.BufferGeometry).attributes.position.array.slice()
  );
  //get mouse pose percentage related to the browser window
  //and set the camera rotation based on the mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState({ r: 125, g: 125, b: 125 });

  const [MODEL_SPIN_DATA, SET_MODEL_SPIN_DATA] = useState({
    MODEL_SPIN_SPEED: 0.0001,
    MODEL_SPIN_MAX_Y: 0.5,
    MODEL_SPIN_MIN_Y: -0.5,
  });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    const onScroll = (event: WheelEvent) => {
      setModelSize(1 + window.scrollY / 100);
    };

    window.addEventListener("wheel", onScroll);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("wheel", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && camera.current && model.current) {
      //camera rotate base on mouse position and model as an anchor
      camera.current.position.x = -Math.sin(mousePos.x) * 0.1;
      camera.current.position.y = Math.sin(mousePos.y) * 0.1;
      camera.current.lookAt(model.current.position);

      const positionOffset = Math.min(0.2, window.innerWidth * 0.0001 + 0.1);

      if (window.innerWidth > 768) {
        camera.current.position.x -= positionOffset;
      }

      //model vertex move based on mouse position
      //console.log(model.current.geometry.attributes);
      const position = model.current.geometry.attributes.position;
      const array = position.array;
      array.set(originalModelVertices);

      for (let i = 0; i < array.length; i += 3) {
        //get vertice world position
        const vertice = new THREE.Vector3(array[i], array[i + 1], array[i + 2]);
        const worldPos = vertice.applyMatrix4(model.current.matrixWorld);

        //get vertice screen position
        const screenPos = worldPos.project(camera.current);
        const x = (screenPos.x + 1) / 2;
        const y = (1 - screenPos.y) / 2;

        //get mouse distance to the vertice
        const dx = x - (mousePos.x - positionOffset);
        const dy = y - mousePos.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        //pushes the vertice away based on the distance
        const pushFactor = 0.1;
        array[i] += dx * pushFactor;
        array[i + 1] += dy * pushFactor;
      }
      position.needsUpdate = true;
    }
  }, [isMobile, mousePos, originalModelVertices]);

  useEffect(() => {
    if (camera.current && model.current) {
      if (window.innerWidth > 768) {
        camera.current.position.x = -Math.sin(mousePos.x) * 0.1;
        camera.current.position.y = Math.sin(mousePos.y) * 0.1;
        camera.current.lookAt(model.current.position);
        camera.current.position.x -= Math.min(
          0.2,
          window.innerWidth * 0.0001 + 0.1
        );
        const modelSpinOffset = -window.innerWidth * 0.0001;
        model.current.rotation.y = modelSpinOffset;
        SET_MODEL_SPIN_DATA({
          ...MODEL_SPIN_DATA,
          MODEL_SPIN_MAX_Y: 0.5 + modelSpinOffset,
          MODEL_SPIN_MIN_Y: -0.5 + modelSpinOffset,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera.current, window.innerWidth, model.current]);

  //model animation
  useEffect(() => {
    const cameraRotationInterval = setInterval(() => {
      requestAnimationFrame(() => {
        //model rotation
        if (model.current) {
          if (
            Number(model.current.rotation.y) > MODEL_SPIN_DATA.MODEL_SPIN_MAX_Y
          ) {
            setModelMoveDirection(-1);
          } else if (
            Number(model.current.rotation.y) < MODEL_SPIN_DATA.MODEL_SPIN_MIN_Y
          ) {
            setModelMoveDirection(1);
          }

          model.current.rotation.y +=
            MODEL_SPIN_DATA.MODEL_SPIN_SPEED * modelMoveDirection;
        }

        //model color
        const r = Math.round(color.r + Math.random() * 2 - 1);
        const g = Math.round(color.g + Math.random() * 2 - 1);
        const b = Math.round(color.b + Math.random() * 2 - 1);
        setColor({ r, g, b });
      });
    }, 1000 / 60);

    return () => clearInterval(cameraRotationInterval);
  }, [MODEL_SPIN_DATA, color, modelMoveDirection]);

  return (
    <>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 0.8]} />
        <points
          ref={model}
          geometry={modelobj as THREE.BufferGeometry}
          scale={[modelsize, modelsize, modelsize]}
        >
          <pointsMaterial
            size={0.001}
            color={`rgb(${color.r}, ${color.g},${color.b})`}
          />
        </points>
      </Canvas>
    </>
  );
}
