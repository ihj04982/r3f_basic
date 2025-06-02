import { useControls } from "leva";

export function ThreeElement() {
  const { color, scale } = useControls({
    color: "#ffa500",
    scale: {
      value: 1,
      min: 0.1,
      max: 3,
      step: 0.1,
    },
  });

  return (
    <>
      <directionalLight position={[10, 10, 0]} />
      <mesh scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
}
