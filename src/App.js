import {Canvas} from "@react-three/fiber"
// import SceneHelloPhysics from "./1.HelloPhysics.jsx/1.Scene";
// import SceneRigidBodyMethods from "./2.rigidBodyMethods/Scene";
// import SceneRigidBodyType from "./3.TypesOfRigidBody/Scene";
// import SceneInstancedMesh from "./4.InstancedMesh/Scene";
import SceneSenson from "./5.sensors/Scene";
import "./styles.css"


function App() {
  return ( <div className="root">
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [3, 3, 7],
      }}
      >
      <SceneSenson></SceneSenson>
    </Canvas>
      </div>
  );
}

export default App;
