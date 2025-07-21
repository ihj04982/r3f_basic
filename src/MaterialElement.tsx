import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export const MaterialElement = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const matcap = useTexture("./images/matcap1.png");

  useEffect(() => {
    for (let i = 0; i < groupRef.current!.children.length; i++) {
      const childMesh = groupRef.current!.children[i] as THREE.Mesh;
      childMesh.geometry = meshRef.current!.geometry;
      childMesh.position.x = i * 2 - 10;
    }
  }, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
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
        {/* PBR: 물리 기반 렌더링 */}
        <mesh>
          <meshStandardMaterial
            color="red"
            emissive={"red"} // 발광 색상
            roughness={0.1} // 기본 값 1, 0~1 사이의 값, 0일 수록 거칠고, 1일 수록 매끄러움
            metalness={1} // 기본 값 0, 0~1 사이의 값, 0일 수록 비금속, 1일 수록 금속
          />
        </mesh>
        <mesh>
          <meshPhysicalMaterial
            color="#ffffff"
            emissive={"black"}
            transparent={true}
            transmission={1} // 투과효과
            thickness={0.1} // 유리 두께
            ior={2} // 굴절율율
          />
        </mesh>
        <mesh>
          {/* 카메라의 거리에 따라  */}
          <meshDepthMaterial />
        </mesh>
        <mesh>
          {/* matCap 다운로드하여 public > images 파일, useTexture 사용 */}
          <meshMatcapMaterial
            matcap={matcap}
            // flatShading={true}
          />
        </mesh>
        <mesh>
          {/* tone 파일 사용, minfilter, magfilter,  public > images 파일, useTexture 사용 */}
          <meshToonMaterial
            color={"red"}
            // flatShading={true}
          />
        </mesh>
      </group>
    </>
  );
};
