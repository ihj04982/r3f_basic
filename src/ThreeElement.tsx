import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeElement() {
  // const boxRef = useRef<THREE.Mesh>(null);
  // const boxCopyRef = useRef<THREE.Msesh>(null);
  // const boxController = useControls({
  //   width: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   height: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   depth: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   widthSegments: {
  //     value: 1,
  //     min: 1,
  //     max: 10,
  //     step: 1,
  //   },
  //   heightSegments: {
  //     value: 1,
  //     min: 1,
  //     max: 10,
  //     step: 1,
  //   },
  //   depthSegments: {
  //     value: 1,
  //     min: 1,
  //     max: 10,
  //     step: 1,
  //   },
  // });

  // 두 개의 메시가 동일한 geometry를 공유하도록 설정
  // useEffect(() => {
  //   if (boxRef.current && boxCopyRef.current) {
  //     boxCopyRef.current.geometry = boxRef.current.geometry;
  //   }
  // }, [boxController]);

  const circleRef = useRef<THREE.Mesh>(null);
  const circleCopyRef = useRef<THREE.Mesh>(null);
  const circleController = useControls({
    radius: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    segments: {
      value: 32,
      min: 1,
      max: 100,
      step: 1,
    },
    thetaStart: {
      value: 0,
      min: 0,
      max: 360,
      step: 0.01,
    },
    thetaLength: {
      value: 360,
      min: 0,
      max: 360,
      step: 0.01,
    },
  });

  useEffect(() => {
    if (circleRef.current && circleCopyRef.current) {
      circleCopyRef.current.geometry = circleRef.current.geometry;
    }
  }, [circleRef, circleCopyRef, circleController]);

  return (
    <>
      <directionalLight position={[1, 1, 1]} intensity={1} />
      {/* 커스텀 컴포넌트 */}
      {/* <mesh ref={boxRef} position={[0, 0, 0]}> */}
      {/* 인자: 너비, 높이, 깊이, 너비 분할 수, 높이 분할 수, 깊이 분할 수 */}
      {/* <boxGeometry
          args={[
            boxController.width,
            boxController.height,
            boxController.depth,
            boxController.widthSegments,
            boxController.heightSegments,
            boxController.depthSegments,
          ]}
        /> */}
      {/* <meshStandardMaterial wireframe /> */}
      {/* </mesh> */}
      {/* <mesh ref={boxCopyRef}>
        <meshStandardMaterial color="red" />
      </mesh> */}
      <mesh ref={circleRef} position={[0, 0, 0]}>
        {/* 인자: 반지름, 분할 수, 시작 각도, 끝 각도 */}
        <circleGeometry
          args={[
            circleController.radius,
            circleController.segments,
            THREE.MathUtils.degToRad(circleController.thetaStart),
            THREE.MathUtils.degToRad(circleController.thetaLength),
          ]}
        />
        <meshStandardMaterial wireframe />
      </mesh>
      <mesh ref={circleCopyRef}>
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}
