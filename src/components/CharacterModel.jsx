import React, {useMemo} from 'react';
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {Html} from "@react-three/drei";

const CharacterModel = ({URL}) => {
    const {scene} = useLoader(GLTFLoader, URL)
    const copiedScene = useMemo(() => scene.clone(), [scene])

    return (
        <group>
            <primitive object={copiedScene}/>
        </group>
    );
};

export default CharacterModel;