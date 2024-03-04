import { OrbitControls, KeyboardControls } from "@react-three/drei";
import PhysicsScene from "./PhysicsScene";

const SceneRigidBodyType = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />

      <KeyboardControls
      //to use the keyboard controls for a component we have to wrap it with the keyboardControls component
      //then we have to specify the key and what we want to do on click of that key
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] }, //here this array says that on pressing ArrowUp and
          //KeyW(means W key) we should see forward movment.how we are doing that u can see in the method 
          //keyMovementHandler method in PhysicsScene component.
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <PhysicsScene />
      </KeyboardControls>
    </>
  );
};

export default SceneRigidBodyType;
