import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

// here we have learnt to control the physical property of rigid body like gravity,friction,restitution ,massetc
//also shaw how to apply force,impulse,torque on events like onClick
//we shaw the different events like onCollisionEnter,onCollisionExit etc.

const PhysicsScene = () => {
  const cubeRef = useRef();
  const secondCubeRef = useRef();

  const cubeClickHandler = () => {
    // cubeRef.current.addForce({ x: 1, y: 0, z: 0 }); //x: 1, y: 0, z: 0 is the force vector 
    // cubeRef.current.applyImpulseAtPoint({ x: 1, y: 0, z: 0 },{ x: 0, y: 4, z: 0 },true) //to  addimpulse
    //at a point.{impulse vector,point where we want to apply}
    cubeRef.current.applyImpulse({ x: -50, y: 0, z: 0 });
    
  };

  const secondCubeClickHandler = () => {
    secondCubeRef.current.applyImpulse({ x: 5, y: 0, z: 0 });
  };

  return (
    <>
      <Physics>
        <RigidBody
          ref={cubeRef} //to target this rigidbody
          onCollisionEnter={() => console.log("Collision Enter")} //this will run when one rigid body hit the
          //another rigid body
          onCollisionExit={() => console.log("Collision Exit")}
          onSleep={() => console.log("sleeping")} //this will run after short time of collision
          onWake={() => console.log("wake")} //this will run when after sleep mode some force,impulse ,collision
          //or any change happen on rigidbody
          gravityScale={1} //to provide the gravity to the rigid body
          restitution={0} //it used to control the bouncing after the collision.bouncing rate is avg of resti-
          //tution value of two objects which are colliding 
          friction={0.7} //to provide friction.in case of two obj avg of both objects will be the overall friction.
         mass={0.6}
        >
          <mesh castShadow position={[1.5, 2.5, 0]}
           onClick={cubeClickHandler} //this method will run when we will click on this  mesh
          //  scale={3} // increasing the scale means increasing the mass so we have to increase the impulse 
          //  also in the same proportion. or we can use the mass property in rigidbody to control the mass
          //if u don't want use scale property or both at same time
           >
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody ref={secondCubeRef} 
        friction={0.7} //this rigid body will stop moving when friction force will nullyfy the force applied on it.
        >
          <mesh
            castShadow
            position={[-1.5, 2.5, 0]}
            onClick={secondCubeClickHandler}
          >
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" restitution={1} friction={0}>
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default PhysicsScene;
