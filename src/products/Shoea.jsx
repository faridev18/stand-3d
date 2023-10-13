import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useSpring,a} from "@react-spring/three";
import { useFrame } from "@react-three/fiber";



export function Shoea(props) {
    const { scene } = useGLTF("product/shoes1.glb");
    const [selected, setSelected] = useState(false);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, 0, 0] : [1.1, 0.34, -1.4],
        scale: selected ? 1 : 0.3,
    });
    const rotationSpeed = 0.01;

    const rotateModel = (obj) => {
        obj.rotation.y += rotationSpeed;
    };

    // Utilisation de useFrame pour mettre à jour la rotation
    useFrame(() => {
        if (selected) {
            rotateModel(scene);
        }
    });

    return (
        <>
            <a.primitive
                position={position}
                scale={scale}
                rotation={rotation}
                object={scene}
                {...props}
                onClick={() => setSelected(!selected)}
            />
        </>
    );
}


export function Shoeb(props) {
    const { scene } = useGLTF("product/shoes2.glb");
    const [selected, setSelected] = useState(false);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, 0, 0] : [-1.1, 0.34, -1.4],
        scale: selected ? 1 : 0.3,
    });
    const rotationSpeed = 0.01;

    const rotateModel = (obj) => {
        obj.rotation.y += rotationSpeed;
    };

    // Utilisation de useFrame pour mettre à jour la rotation
    useFrame(() => {
        if (selected) {
            rotateModel(scene);
        }
    });

    return (
        <>
            <a.primitive
                position={position}
                scale={scale}
                rotation={rotation}
                object={scene}
                {...props}
                onClick={() => setSelected(!selected)}
            />
        </>
    );
}
