import * as THREE from "three";

export function ThreeElement () {
    return( 
        <>
        <directionalLight position={[5, 5, 5]}/>
            <mesh rotation={[THREE.MathUtils.degToRad(45), THREE.MathUtils.degToRad(45), 0]}>
                <boxGeometry/>
                <meshBasicMaterial color={"red"}/>
            </mesh>
        </>
    )
}