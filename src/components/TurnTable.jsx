import { Float, useGLTF } from "@react-three/drei";

const TurnTable = (props) => {
  const { nodes, materials } = useGLTF("/models/voxel_turntable.glb");
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} {...props}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.palette}
          rotation={[-Math.PI / 3, 0, 0]}
          // position={[0, 0.079, 0.181]}
          scale={[0.7, 0.7, 0.7]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/voxel_turntable.glb");

export default TurnTable;
