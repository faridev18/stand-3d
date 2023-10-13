import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useSpring,a} from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { productState } from "../atoms/temps";
import { useRecoilState } from "recoil";


export function Glassa(props) {
    const { scene } = useGLTF("product/glass1.glb");
    const [selected, setSelected] = useState(false);

    const name = "glass1"
    const [productname, setProductname] = useRecoilState(productState);
    console.log(productname);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -1, 0.6] : [1.5, -1.2, -1.1],
        scale: selected ? 0.008 : 0.003,
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
            if (!selected) {
                setSelected(false)
            }
            
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


export function Glassb(props) {
    const { scene } = useGLTF("product/glass2.glb");
    const [selected, setSelected] = useState(false);

    const name = "glass2"
    const [productname, setProductname] = useRecoilState(productState);
    console.log(productname);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -0.5, 0.6] : [0, -1.2, -1.1],
        scale: selected ? 1 : 0.35,
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

export function Glassc(props) {
    const { scene } = useGLTF("product/glass3.glb");
    const [selected, setSelected] = useState(false);

    const name = "glass3"
    const [productname, setProductname] = useRecoilState(productState);
    console.log(productname);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -0.5, 0.6] : [1.5, -0.5, -1.2],
        scale: selected ? 1 : 0.35,
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

export function Glassd(props) {
    const { scene } = useGLTF("product/glass4.glb");
    const [selected, setSelected] = useState(false);

    const name = "glass4"
    const [productname, setProductname] = useRecoilState(productState);
    console.log(productname);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -0.5, 0.6] : [-1.5, -0.5, -1.2],
        scale: selected ? 1 : 0.35,
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


export function Glasse(props) {
    const { scene } = useGLTF("product/glass5.glb");
    const [selected, setSelected] = useState(false);

    const name = "glass5"
    const [productname, setProductname] = useRecoilState(productState);
    console.log(productname);

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -1, 0.6] : [-1.5, -1.2, -1.1],
        scale: selected ? 2.3 : 0.9,
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



