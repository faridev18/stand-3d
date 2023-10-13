import React, { Suspense, useRef, useState } from 'react'
import { Stand } from './Stand'
import { OrbitControls, ContactShadows, Environment, PresentationControls, useHelper, SpotLight } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { Ceilinglight } from './components/Ceilinglight'
// import { Model } from './components/Holiday'
import * as THREE from "three";
import Light from './components/Light'
import { Shoea, Shoeb, Shoec, } from './products/Shoea'
import { Headseta, Headsetb, Headsetc, Headsetd } from './products/Headset'
import { Glassa, Glassb, Glassc, Glassd, Glasse } from './products/Glass'
import { Magic } from './components/Magic'
import Loader from './Loader'

export default function Experience() {

    const [selected, setSelected] = useState(false);



    return (
        <>
            
            <OrbitControls 

            maxAzimuthAngle={0.4}
            minAzimuthAngle={-0.5}
             maxDistance={8}
             minDistance={5}
             maxPolarAngle={1.7} 
             minPolarAngle={1.2} />
            <color args={['#f73803']} attach="background" />
            <Environment preset="city" />
            <Suspense fallback={null}>
                {/* <PresentationControls
                    global
                    rotation={[0, 0, 0]}
                    cursor=''
                    polar={[0, 0.2]}
                    azimuth={[- 1, 0.75]}
                    config={{ mass: 1, tension: 50 }}
                    // snap={{ mass: 4, tension: 100 }}
                > */}
                    <Light/>

                    <Stand position={[0, -1.5, 0]} rotation={[0, Math.PI, 0]} />
                    <EffectComposer>
                        <Bloom mipmapBlur />
                        <Ceilinglight position={[3.2, 2.3, .75]} scale={0.5} />
                        <Ceilinglight position={[2.8, 2.3, -.35]} scale={0.5} />
                        <Ceilinglight position={[2.25, 2.3, -1.57]} scale={0.5} />

                        <Ceilinglight position={[1.1, 2.3, -1.4]} scale={0.5} />
                        <Ceilinglight position={[-1.05, 2.3, -1.4]} scale={0.5} />

                        <Ceilinglight position={[-2.28, 2.3, -1.38]} scale={0.5} />
                        <Ceilinglight position={[-2.8, 2.3, -.24]} scale={0.5} />
                        <Ceilinglight position={[-3.3, 2.3, .9]} scale={0.5} />


                        {/* product */}

                        <Shoea />
                        <Shoeb />
                        <Shoec />

                        <Headseta />
                        <Headsetb />
                        <Headsetc />
                        <Headsetd />

                        <Glassa />
                        <Glassb />
                        <Glassc />
                        <Glassd />
                        <Glasse />

                        <Magic  />


                        



                    </EffectComposer>

                {/* </PresentationControls> */}

            </Suspense>

        </>
    )
}
