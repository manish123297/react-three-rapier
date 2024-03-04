import { Physics, RigidBody } from "@react-three/rapier";

// https://pmndrs.github.io/react-three-rapier

const PhysicsScene = () => {
  return (
    <Physics gravity={[3, -9.81, 0]}
    //react rapier uses physics component to wrap all those components in which we want to apply physics 
    //properties
//gravity default va;u is [0,-9.81,0] but we can change it the 

    >
      <RigidBody
    //   A rigid body is a physical object that can be simulated by the physics engine.
      >
        <mesh castShadow position={[0, 1.5, 0]}
          //this is the  rectangular box which will fall on floor.
        >
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
        <mesh
          castShadow
          position={[0, 1.5, 0]}
          scale={[0.25, 3, 1]}
          position-z={-2}
          //this is the  cube box which will fall on floor.
        >
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </RigidBody>

      {/* <RigidBody>
        <mesh
          castShadow
          position={[0, 1.5, 0]}
          scale={[0.25, 3, 1]}
          position-z={-2}
        >
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </RigidBody> */}

      <RigidBody type="fixed"
      //type is fixed so that it can works like floor,otherwise it will also start falling(by default 
    //   type:dynamic)
      >
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} 
        receiveShadow
        //this mesh is used as the plane/floor
        >
            
          <boxGeometry args={[8, 8, 0.35]} />
          <meshStandardMaterial color="#C7CAC7" />
        </mesh>
      </RigidBody>
    </Physics>
  );
};

export default PhysicsScene;
