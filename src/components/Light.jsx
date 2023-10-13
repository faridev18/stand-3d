import { useHelper, SpotLight } from '@react-three/drei';
import React, { useRef } from 'react'
import * as THREE from "three";


export default function Light() {

    const ref = useRef();
    const helper = useHelper(ref, THREE.PointLightHelper, 0.5, "red");
    return (
        <>
            <ambientLight intensity={1} />
            <SpotLight
                color="#fff"
                distance={4}
                angle={.5}
                attenuation={5}
                anglePower={2}
                position={[0, 5, 0]}
            />
            {/*  */}
            {/* <pointLight
                ref={ref}
                position={[3.2, 2, .7]}
                color="#fff"
                intensity={0.3}
                decay={2}
                distance={3}
            /> */}
            {/*  */}

            <pointLight
                ref={ref}
                position={[3.2, 1.8, 0.75]}
                color="orange"
                intensity={0.3}
                decay={2}
                distance={3}
            />
            <pointLight
                ref={ref}
                position={[2.8, 1.8, -0.35]}
                color="orange"
                intensity={0.3}
                decay={2}
                distance={3}
            />
            <pointLight
                ref={ref}
                position={[2.25, 1.8, -1.57]}
                color="orange"
                intensity={0.3}
                decay={2}
                distance={3}
            />
            <pointLight
                ref={ref}
                position={[1.1, 1.8, -1.4]}
                color="orange"
                intensity={0.3}
                decay={2}
                distance={3}
            />
            <pointLight
                ref={ref}
                position={[-1.05, 1.8, -1.4]}
                color="orange"
                intensity={0.3}
                decay={2}
                distance={3}
            />
            <pointLight
                ref={ref}
                position={[-2.28, 1.8, -1.38]}
                color="orange"
                intensity={0.3}
                decay={2}
                distance={3}
            />
            <pointLight
                ref={ref}
                position={[-2.8, 1.8, -0.24]}
                color="orange"
                intensity={0.3}
                decay={2}
                distance={3}
            />
            <pointLight
                ref={ref}
                position={[-3.3, 1.8, 0.9]}
                color="orange"
                intensity={0.3}
                decay={2}
                distance={3}
            />
        </>
    )
}
