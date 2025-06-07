import "./App.css";
import { Canvas } from "@react-three/fiber";
import { ThreeElement } from "./ThreeElement";
import { OrbitControls } from "@react-three/drei";
// import { useControls } from "leva";

function App() {
  // const color = useControls({
  //   value: "green",
  // });

  // const grid = useControls({
  //   segment: { value: 10, min: 2, max: 100, step: 1 },
  // });

  // 캔버스 안에서는 캔버스 엘리멘트만 사용
  return (
    <>
      <Canvas
        camera={{
          position: [5, 5, 5],
          near: 1,
          far: 100,
          fov: 75,
        }}
      >
        <color attach="background" args={["white"]} />
        <OrbitControls />
        <axesHelper args={[6]} />
        <gridHelper args={[10, 10]} />
        <ThreeElement />
      </Canvas>
      R3F_Basic
    </>
  );
}

export default App;
