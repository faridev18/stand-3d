import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useSpring,a} from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { productState } from "../atoms/temps";
import { useRecoilState } from "recoil";



export function Shoea(props) {
    const { scene } = useGLTF("product/shoes1.glb");
    const [selected, setSelected] = useState(false);

    const name = "shoes1"
    const [productname, setProductname] = useRecoilState(productState);
    

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, 0, 0.6] : [1.5, 0.34, -1.4],
        scale: selected ? 0.9 : 0.3,
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







export function Shoeb(props) {
    const { scene } = useGLTF("product/shoes2.glb");
    const [selected, setSelected] = useState(false);

    const name = "shoes2"
    const [productname, setProductname] = useRecoilState(productState);
    

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -0.7, 0.6] : [-1.4, 0.15, -1.4],
        scale: selected ? 0.09 : 0.022,
        rotation : [0, -Math.PI/2, 0]
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


export function Shoec(props) {
    const { scene } = useGLTF("product/shoes3.glb");
    const [selected, setSelected] = useState(false);

    const name = "shoes3"
    const [productname, setProductname] = useRecoilState(productState);
    

    // Utilisation de useSpring pour animer la position
    const { position, scale, rotation } = useSpring({
        position: selected ? [0, -0.7, 0.6] : [0, 0.15, -1.4],
        scale: selected ? 0.009 : 0.0022,
        rotation : [0, -Math.PI/4, 0]
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



// export function Shoed(props) {
//     const { scene } = useGLTF("product/shoes4.glb");
//     const [selected, setSelected] = useState(false);

//     const name = "shoes4"
//     const [productname, setProductname] = useRecoilState(productState);
//     

//     // Utilisation de useSpring pour animer la position
//     const { position, scale, rotation } = useSpring({
//         position: selected ? [0, -0.7, 0.6] : [0, -0.5, -1.75],
//         scale: selected ? 0.0000009 : 0.0000005,
//         rotation : [0, Math.PI/2, 0]
//     });
//     const rotationSpeed = 0.01;

//     const rotateModel = (obj) => {
//         obj.rotation.y += rotationSpeed;
//     };

//     // Utilisation de useFrame pour mettre à jour la rotation
//     useFrame(() => {
//         if (selected) {
//             rotateModel(scene);
//         }
//     });

//     useEffect(() => {
//         if (productname===name) {
            
//         } else {
//             setSelected(false)
//         }
//     })

//     return (
//         <>
//             <a.primitive
//                 position={position}
//                 scale={scale}
//                 rotation={rotation}
//                 object={scene}
//                 {...props}
//                 onClick={() => {setSelected(!selected); setProductname(name)} }
//             />
//         </>
//     );
// }