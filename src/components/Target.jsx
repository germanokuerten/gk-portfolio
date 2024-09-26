import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

const Camera = (props) => {
  const { nodes, materials } = useGLTF("/models/camera.glb");
  return (
    <group {...props} dispose={null}>
      <Float floatIntensity={0.1}>
        <group position={[-827.129, -50, -355]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Boole_2_Mat1_0.geometry}
            material={materials["Mat.1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Boole_2_Mat_0.geometry}
            material={materials.material}
          />
        </group>
      </Float>
    </group>
  );
};

useGLTF.preload("/models/camera.glb");

export default Camera;
