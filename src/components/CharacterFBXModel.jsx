import React, {useMemo} from 'react';
import {useFrame, useLoader} from "@react-three/fiber";
import {FBXLoader} from "three/addons/loaders/FBXLoader";
import THREE from "three.js";
import {SkeletonUtils} from "three-stdlib";

const CharacterFBXModel = ({URL}) => {
    const model = useLoader(FBXLoader, URL)
    const modelCopy = useMemo(() => SkeletonUtils.clone(model), [model])

    modelCopy.animations = model.animations

    let mixer = new THREE.AnimationMixer(modelCopy)
    if (modelCopy.animations.length) {
        modelCopy.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.clampWhenFinished = true
            action.play();
        });
    }

    useFrame((state, delta) => {
        mixer?.update(delta)
    })
    return (
        <mesh>
            <primitive object={modelCopy}/>
        </mesh>
    );
};

export default CharacterFBXModel;