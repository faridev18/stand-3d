import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Loader from "./Loader";
import { useEffect, useState } from "react";

function App() {
  const [mobile, setMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth < 700) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {

    window.addEventListener("resize", handleResize);

    // Assurez-vous de supprimer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Loader />
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 50,
          position: mobile? [0, 1.3, 7] : [0, 1.3, 5]
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
