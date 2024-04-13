import { OrbitControls } from "@react-three/drei";
import PhysicsScene from "./PhysicsScene";

const SceneSensor = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 2, 3]} castShadow />

      <PhysicsScene />
    </>
  );
};

export default SceneSensor;
