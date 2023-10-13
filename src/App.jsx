import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Loader from "./Loader";

function App() {
  return (
    <>
      <Loader />
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 50,
          // position: [0, 7, 0]
          position: [0, 1.3, 5]
        }} >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
