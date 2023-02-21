import React from 'react';
import {useLoader} from "@react-three/fiber";

const CharacterViewModel = ({URL}) => {
    const gltf = useLoader(GLTFLoader, URL)
    return <primitive object={gltf.scene}/>
};

export default CharacterViewModel;