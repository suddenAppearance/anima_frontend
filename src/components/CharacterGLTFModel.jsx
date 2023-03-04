import React, {useMemo} from 'react';
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";

const CharacterGLTFModel = ({URL}) => {
    const {scene} = useLoader(GLTFLoader, URL)
    const copiedScene = useMemo(() => scene.clone(), [scene])

    return (
        <mesh>
            <primitive object={copiedScene}/>
        </mesh>
    );
};

export default CharacterGLTFModel;