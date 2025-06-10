import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeElement() {
  const meshRef = useRef<THREE.Mesh>(null);

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    console.log("frame");
  });

  useEffect(() => {
    for (let i = 0; i < groupRef.current!.children.length; i++) {
      const childMesh = groupRef.current!.children[i] as THREE.Mesh;
      childMesh.geometry = meshRef.current!.geometry;
      childMesh.position.x = i * 2;
    }
  }, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={5} />

      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial color="green" visible={false} />
      </mesh>

      <group ref={groupRef}>
        <mesh>
          <meshBasicMaterial color={"green"} wireframe />
        </mesh>
        <mesh>
          {/* 빛에 영향을 받지 않음 */}
          <meshBasicMaterial
            color="red"
            visible // 기본 값 true
            transparent={true} // 기본 값 false, true시 투명도 조절 가능
            opacity={1} // 0~1 사이의 값
            side={THREE.FrontSide} // 기본 값 FrontSide, 면 방향 설정, front, back, double (plane일 때 명확히 보임임)
            alphaTest={0.5} // opacity의 값과 비교해서 투명도 조절, alphatest보다 작으면 보이지 않음
            depthTest={true} // 깊이(z buffer) 검사 여부, 기본 값 true, false면 그리기 순서대로 무조건 그림(앞에 그려진 오브젝트를 가릴 수 있음)
            depthWrite={true} // 깊이(z buffer) 쓰기 여부, 기본 값 true, false면 뒤에 그려지는 오브젝트가 이 오브젝트를 가릴 수 있음
            fog={true} // 기본값 true, fog의 영향을 받을지 여부
          />
        </mesh>
        {/* fog: color, near, far (거리는 카메라 기준) */}
        {/* <fog attach="fog" args={["orange", 3, 10]} /> */}
        <mesh>
          {/* 빛에 영향을 받음, 나무, 흙, 벽 등 재질 */}
          <meshLambertMaterial
            emissive={"red"} // 발광 색상
            emissiveIntensity={1} // 발광 강도
            color="blue"
          />
        </mesh>
        {/* ------------------------------------------------------------ */}
        <mesh>
          {/* 금속성 재질 */}
          <meshPhongMaterial
            color="blue"
            specular="white" // 반사광
            shininess={30} // 기본 값 30, 반사광 강도, 높을 수록 sharp 해짐
            flatShading={false} // true시 면으로 반사 렌더링
          />
        </mesh>
        {/* ------------------------------------------------------------ */}
        <mesh>
          {/* Normal 벡터의 xyz 값을 rgb로 표현*/}
          <meshNormalMaterial />
        </mesh>
      </group>
    </>
  );
}
