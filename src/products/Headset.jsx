import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useSpring,a} from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { productState } from "../atoms/temps";
import { useRecoilState } from "recoil";



export function Headseta(props) {
    const { scene } = useGLTF("product/Headset1.glb");
    const [selected, setSelected] = useState(false);

    const name = "headset1"
    const [productname, setProductname] = useRecoilState(productState);
    console.log(productname);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -1, 0.6] : [1.5, 0.9, -1.4],
        scale: selected ? 0.025 : 0.007,
        rotation : [0, Math.PI/2, 0]
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

    useEffect(() => {
        if (productname===name) {
            
        } else {
            setSelected(false)
        }
    })

    return (
        <>
            <a.primitive
                position={position}
                scale={scale}
                rotation={rotation}
                object={scene}
                {...props}
                onClick={() => {setSelected(!selected); setProductname(name)} }
            />
        </>
    );
}

export function Headsetb(props) {
    const { scene } = useGLTF("product/Headset2.glb");
    const [selected, setSelected] = useState(false);

    const name = "headset2"
    const [productname, setProductname] = useRecoilState(productState);
    console.log(productname);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -1, 0.6] : [-1.5, 0.93, -1.4],
        scale: selected ? 13 : 4,
        rotation : [0, 0, 0]
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

    useEffect(() => {
        if (productname===name) {
            
        } else {
            setSelected(false)
        }
    })

    return (
        <>
            <a.primitive
                position={position}
                scale={scale}
                rotation={rotation}
                object={scene}
                {...props}
                onClick={() => {setSelected(!selected); setProductname(name)} }
            />
        </>
    );
}


export function Headsetc(props) {
    const { scene } = useGLTF("product/Headset3.glb");
    const [selected, setSelected] = useState(false);

    const name = "headset3"
    const [productname, setProductname] = useRecoilState(productState);
    console.log(productname);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -1, 0.6] : [0, 1, -1.4],
        scale: selected ? 1.5 : 0.5,
        rotation : [0, Math.PI/2, 0]
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

    useEffect(() => {
        if (productname===name) {
            
        } else {
            setSelected(false)
        }
    })
    return (
        <>
            <a.primitive
                position={position}
                scale={scale}
                rotation={rotation}
                object={scene}
                {...props}
                onClick={() => {setSelected(!selected); setProductname(name)} }
            />
        </>
    );
}

export function Headsetd(props) {
    const { scene } = useGLTF("product/Headset4.glb");
    const [selected, setSelected] = useState(false);

    const name = "headset4"
    const [productname, setProductname] = useRecoilState(productState);
    console.log(productname);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -1, 0.6] : [0, -0.4, -1.2],
        scale: selected ? 1.5 : 0.4,
        rotation : [0, -Math.PI, 0]
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

    useEffect(() => {
        if (productname===name) {
            
        } else {
            setSelected(false)
        }
    })
    return (
        <>
            <a.primitive
                position={position}
                scale={scale}
                rotation={rotation}
                object={scene}
                {...props}
                onClick={() => {setSelected(!selected); setProductname(name)} }
            />
        </>
    );
}

