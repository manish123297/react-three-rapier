import { OrbitControls } from "@react-three/drei";
// import PhysicsScene from "./2.PhysicsScene";
import Colliders from "./3.Colliders";



//PhysicsScene-> here we have learn how to apply physical properties to the mesh-------------------------
//1.wrap the whole scene with physics component
//2.wrap mesh with RigidBody component
//

const SceneHelloPhysics = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />
      <Colliders></Colliders>
    </>
  );
};

export default SceneHelloPhysics;