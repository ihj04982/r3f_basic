import "./App.css";
import {Canvas} from "@react-three/fiber";
import {ThreeElement} from "./ThreeElement";

function App() {
    // 캔버스 안에서는 캔버스 엘리멘트만 사용
    return <>
    <Canvas>
        <ThreeElement></ThreeElement>
    </Canvas>
    R3F_Basic
    </>;
}

export default App;
 