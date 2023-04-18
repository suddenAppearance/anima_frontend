import React, {useEffect, useMemo} from 'react';
import {useFrame, useLoader} from "@react-three/fiber";
import {FBXLoader} from "three/addons/loaders/FBXLoader";
import THREE from "three.js";
import {SkeletonUtils} from "three-stdlib";

const CharacterFBXModel = ({URL, mixerRef, pause, duration}) => {
    const model = useLoader(FBXLoader, URL)
    const modelCopy = useMemo(() => SkeletonUtils.clone(model), [model])

    modelCopy.animations = model.animations
    modelCopy.animations.forEach((clip) => clip.name = "anima")

    let mixer = new THREE.AnimationMixer(modelCopy)
    if (mixerRef)
        mixerRef.current = mixer

    if (duration)
        duration.current = 0

    if (modelCopy.animations.length) {
        modelCopy.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            if (duration) duration.current += clip.duration
            action.clampWhenFinished = true
            action.play();
        });
    }

    useFrame((state, delta) => {
        !pause?.current && mixer?.update(delta)
    })
    return (<mesh>
        <primitive object={modelCopy}/>
    </mesh>);
};

export default CharacterFBXModel;