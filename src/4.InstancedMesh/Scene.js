import { OrbitControls } from "@react-three/drei";
import PhysicsScene from "./PhysicsScene";
const SceneInstancedMesh = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />

      <PhysicsScene />
    </>
  );
};

export default SceneInstancedMesh;
