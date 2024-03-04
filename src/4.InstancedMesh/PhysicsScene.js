import { Physics, RigidBody, InstancedRigidBodies } from "@react-three/rapier";
import { useMemo } from "react";
import * as THREE from "three";

const PhysicsScene = () => {
  const count = 300;

  const cubesTransformations = useMemo(() => {
    const cubesPositions = [];
    const cubesRotations = [];
    const cubesScales = [];

    for (let i = 0; i < count; i++) {
      //for loop to fill the above three variables with values
      cubesPositions.push([
        (Math.random() - 0.5) * 5,
        Math.random() * 20,
        (Math.random() - 0.5) * 5,
      ]);
      cubesRotations.push([0, 0, 0]);
      cubesScales.push([0.5, 0.5, 0.5]);
    }

    return {
      positions: cubesPositions,
      rotations: cubesRotations,
      scales: cubesScales,
    };
  }, []);

  return (
    <Physics>
      {/* <RigidBody>
        <mesh
          castShadow
          position={[0, 1.5, 0]}
          geometry={new THREE.BoxGeometry(2, 2, 2)}
        >
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </RigidBody> */}

      <RigidBody type="fixed">
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
          <boxGeometry args={[8, 8, 0.35]} />
          <meshStandardMaterial color="#C7CAC7" />
        </mesh>
      </RigidBody>

      {/* -------------------Instanced Mesh------------------------------------------------- */}

      <InstancedRigidBodies
        positions={cubesTransformations.positions}
        rotations={cubesTransformations.rotations}
        scales={cubesTransformations.scales}
      >
        <instancedMesh args={[null, null, count]} castShadow>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </instancedMesh>
      </InstancedRigidBodies>
      {/* ---------------------------Instanced Mesh------------------------------------------ */}
    </Physics>
  );
};

export default PhysicsScene;
