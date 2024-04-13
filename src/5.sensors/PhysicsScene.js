import { Text3D } from "@react-three/drei";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
//here learnt that how to show or hode a rigidbody/mesh when two mesh/rigidbody intersect
// each other (here sphere and collider mesh )

const PhysicsScene = () => {
  const [touch, setTouch] = useState(false);
  const sphereRef = useRef();

  const sphereHandler = (e) => {
    sphereRef.current.applyImpulse(
      {
        x: 0,
        y: 3.25,
        z: -5.25,
      },
      true
    );
  };

  return (
    <>
      <Physics debug>
        <RigidBody
          ref={sphereRef}
          position={[-0.8, 2.5, 5]}
          colliders="hull"
          // onSleep={(e) => console.log(e)} //this will run after short time of collision
          // onWake={() => console.log("wake")}
          // onDoubleClick={(e) => console.log("double click")}
        >
          <mesh
            castShadow
            onClick={sphereHandler}
            // onPointerEnter={(e) => console.log("pointer")}
            // onDoubleClick={(e) => console.log("double click")}
          >
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" position={[0, 0.175, -5]}>
          <CuboidCollider
            args={[1, 1, 1]}
            sensor //sensor attribute is used to detect that when a collider here(sphere) intersect
            //and leaves the collider.
            onIntersectionEnter={() => setTouch(true)} //this will run when some other rigid  body intersect this
            onIntersectionExit={() => setTouch(false)} //run when rigid body go out of the this
            //collider/rigidbody/mesh
          />
        </RigidBody>

        {/* floor */}
        <RigidBody type="fixed" restitution={0.4}>
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
        {/* front wall */}

        <RigidBody type="fixed" restitution={0.3}>
          <mesh
            position-y={1.6}
            position-z={-7.3}
            rotation-x={-Math.PI * 0.5}
            receiveShadow
          >
            <boxGeometry args={[15, 0.35, 5]} />
            <meshStandardMaterial color="grey" />
          </mesh>
        </RigidBody>
        {/* left wall */}
        <RigidBody type="fixed" restitution={0.3}>
          <mesh
            position-y={0}
            position-x={-7.28}
            rotation-x={-Math.PI * 0.5}
            receiveShadow
          >
            <boxGeometry args={[0.35, 15, 2]} />
            <meshStandardMaterial color="grey" />
          </mesh>
        </RigidBody>
        {/*Right wall  */}
        <RigidBody type="fixed" restitution={0.3}>
          <mesh
            position-y={0}
            position-x={7.5}
            rotation-x={-Math.PI * 0.5}
            receiveShadow
          >
            <boxGeometry args={[0.35, 15, 2]} />
            <meshStandardMaterial color="grey" />
          </mesh>
        </RigidBody>
      </Physics>

      {touch && (
        <Text3D font="./fonts/2.json" position={[-4.75, 2, -5]}>
          Goal Ho Gya
          <meshNormalMaterial />
        </Text3D>
      )}
    </>
  );
};

export default PhysicsScene;
