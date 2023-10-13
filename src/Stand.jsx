/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Stand(props) {
  const { nodes, materials } = useGLTF("model/stand0.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.metalico}
        position={[3.35, 3.779, -0.87]}
        rotation={[0, -0.415, 0]}
        scale={[0.188, 0.044, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.metalico}
        position={[2.836, 3.779, 0.297]}
        rotation={[0, -0.415, 0]}
        scale={[0.188, 0.044, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.metalico}
        position={[2.347, 3.779, 1.401]}
        rotation={[0, -0.415, 0]}
        scale={[0.188, 0.044, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.metalico}
        position={[1.056, 3.779, 1.467]}
        rotation={[0, -1.571, 0]}
        scale={[0.188, 0.044, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.metalico}
        position={[-1.124, 3.779, 1.471]}
        rotation={[0, -1.571, 0]}
        scale={[0.188, 0.044, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.metalico}
        position={[-2.299, 3.779, 1.578]}
        rotation={[Math.PI, -0.418, Math.PI]}
        scale={[0.188, 0.044, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.metalico}
        position={[-2.811, 3.779, 0.414]}
        rotation={[Math.PI, -0.418, Math.PI]}
        scale={[0.188, 0.044, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials.metalico}
        position={[-3.296, 3.779, -0.692]}
        rotation={[Math.PI, -0.418, Math.PI]}
        scale={[0.188, 0.044, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_2.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_3.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_4.geometry}
        material={materials["Material.004"]}
      />
    </group>
  );
}

useGLTF.preload("model/stand0.glb");