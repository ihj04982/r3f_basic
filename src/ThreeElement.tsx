import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
// import { Canvas } from "@react-three/fiber";

export function ThreeElement() {
  // const { scene } = useThree();
  // const boxRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // const { color, scale } = useControls({
  //   color: "#ffa500",
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 3,
  //     step: 0.1,
  //   },
  // });

  useFrame((state, delta) => {
    // if (boxRef.current) {
    //   boxRef.current.rotation.y += 0.01;
    // }
    // scene.rotation.x += 0.01;
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      // 위치 변경
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;

      // 크기 변경
      groupRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime) * 0.2;

      // 회전 변경
      groupRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      <directionalLight position={[10, 10, 0]} />
      <group ref={groupRef}>
        {/* 태양 */}
        <mesh>
          <sphereGeometry args={[1, 164, 164]} />
          <meshStandardMaterial color="yellow" />
        </mesh>

        {/* 지구 궤도 */}
        <group rotation={[0, Math.PI / 4, 0]}>
          {/* 지구 */}
          <mesh position={[3, 0, 0]}>
            <sphereGeometry args={[0.5, 64, 64]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </group>
      </group>
    </>
  );
}
