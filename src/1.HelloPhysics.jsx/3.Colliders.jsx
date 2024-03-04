import {
    Physics,
    RigidBody,
    CuboidCollider,
    CapsuleCollider,
    
  } from "@react-three/rapier";
  
  // https://pmndrs.github.io/react-three-rapier/
  // https://rapier.rs/docs/user_guides/javascript/colliders/#mass-properties
  
  const Colliders= () => {
    //we are  using this component in Scene component of  1.helloPhysics.
    return (
      <Physics gravity={[0, -9.81, 0]} 
    //   debug  //debug-used to see the actual boundries of the mesh that is the wireframe or the collider
      //by default collider shape reamins as cuboid but we can provide the type like trimesh,ball or hull
    //    so that  collider can be of simmilar to the shape of the the object
      >
        
        <RigidBody colliders={false} position={[1.5, 1.5, 0]}>
          <CuboidCollider args={[0.5, 0.5, 0.5]} />
          {/* <CuboidCollider args={[0.25, 0.25, 0.25]} position={[-2, -1, -2.5]} /> */}
          <mesh castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>
  
        <RigidBody colliders="trimesh"
        //trimesh collider occupies  shape similar to the object but it decreases the performance of the
        // animation.
        >
          <mesh position={[-1.5, 1.5, 0]}>
            <torusKnotGeometry args={[0.5, 0.15, 100, 100]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>
  
        <RigidBody colliders={false} position={[0, 1.5, -1.5]}
        //after making the default collider false we can add custom collider like capsulCollider
        //visit react rapeir documentation to get the custom colliders and see what props we need to 
        //pass for that collider(https://rapier.rs/docs/->Api documentation->javascript 3D->shapes(cube,cuboid etc)->constructor) 
        >
          <CapsuleCollider args={[0.375, 0.6]} //[half height,radius]   
          />
          <mesh>
            <sphereGeometry args={[0.75, 64, 64]} />
            <meshStandardMaterial color="#23B278" />
          </mesh>
        </RigidBody>
  
        <RigidBody type="fixed">
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[8, 8, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    );
  };
  
  export default Colliders;
  