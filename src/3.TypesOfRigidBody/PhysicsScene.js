import {  Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";

//here we have learnt that how to rotate a rigidBody on axes through euler and quadrian angle
//learnt to apply physical property on press of keyboard keys(arrowUp,arrowDown,W ,S eetc) by using
//keyboardControls component and useKeyBoardControls hook of react drei.
const PhysicsScene = () => {
  const cubeRef = useRef();
  const spinner = useRef();
  const isJump = useRef(false);//this is just to toggle the value of isJump variable

  const allKeys = useKeyboardControls((keys) => keys); //this hook is used to check that which key is pressed
  //the arrow function which we passed in hook that gives us the keys and we are returnig these keys so that
  //we can do something on ket press(here we are applying the impulse on key press)
  console.log(allKeys);

  const cubeClickHandler = () => {
    cubeRef.current.applyImpulse({ x: -25, y: 0, z: 0 });
  };

  const cubeMovementHandler = () => {
    if (allKeys.forward) {
      cubeRef.current.applyImpulse({ x: 0, y: 0, z: -0.3 });
    }
    if (allKeys.backward) {
      cubeRef.current.applyImpulse({ x: 0, y: 0, z: 0.3 });
    }
    if (allKeys.leftward) {
      cubeRef.current.applyImpulse({ x: -0.3, y: 0, z: 0 });
    }
    if (allKeys.rightward) {
      cubeRef.current.applyImpulse({ x: 0.3, y: 0, z: 0 });
    }

    if (isJump.current) {
      //isJump.current is basically checking that if we are in collisionEnterPhase  then only do the jump
      //or apply the impulse else don't apply the impulse so that object can fall down on floor after
      //one time impulse get applied .if multiple time impulse will be applied then box will not fall
      //down on floor
      if (allKeys.jump) {
        console.log("jump");
        cubeRef.current.applyImpulse({ x: 0, y: 40, z: 0 });
        isJump.current = false;
      }
    }
  };

  useFrame((state) => {
    const getElapsedTime = state.clock.getElapsedTime();
    // console.log(getElapsedTime);

    //1) setNextKinematicTranslation({x:0,y:0,z:0}) // this method is to Move the rigid body
    //2) setNextKinematicRotation(Quaternion)    // this method is to Rotate the rigid body

    //A) Moving the Spinner
    spinner.current.setNextKinematicTranslation({
      x: 0,
      y: Math.abs(Math.sin(getElapsedTime)), //this is to move the spinner in  sinusoidal way along y axes.
      z: 0,
    });

    //B) Rotating the Spinner
    const eulerRotationAngle = new THREE.Euler(0, getElapsedTime, 0);
    const quaternionRotation = new THREE.Quaternion(eulerRotationAngle);
    quaternionRotation.setFromEuler(eulerRotationAngle);
    spinner.current.setNextKinematicRotation(quaternionRotation); //this is two rotate the spinner

    //cube Movement Handler
    cubeMovementHandler(); //we are calling it here becz we want to see in each frame that which key
    //is pressed
  });

  return (
    <>
      <Physics>
        <RigidBody
          ref={cubeRef}
          position={[2.5, 2.5, 0]}
          onCollisionEnter={() => (isJump.current = true)} 
          onCollisionExit={() => (isJump.current = false)}          
        >
          <mesh castShadow onClick={cubeClickHandler}>
            <boxGeometry args={[1.75, 1.75, 1.75]} />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody ref={spinner} position-y={-0.65} type="kinematicPosition">
          <mesh receiveShadow>
            <boxGeometry args={[1, 0.35, 15]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody
          type="fixed" //rigid bpdy type fixed means it's position will not affect by anything like collision 
          position-y={-1}
          rotation-x={-Math.PI * 0.5}
          restitution={0.5}
          friction={0}
        >
          <mesh receiveShadow>
            <boxGeometry args={[60, 60, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default PhysicsScene;
